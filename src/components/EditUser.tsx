"use client";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const formSchema = z.object({
	username: z.string().min(2, { message: "Username must be at least 2 characters!" }).max(50),
	email: z.string().email({ message: "Invalid email address!" }),
	phone: z.string().min(10).max(15),
	location: z.string().min(2),
	role: z.enum(["admin", "user"]),
});
export default function EditUser() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "john.doe",
			email: "john.doe@gmail.com",
			phone: "+1 234 5678",
			location: "New York, NY",
			role: "admin",
		},
	});
	return (
		<div>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="mv-4">Edit User</SheetTitle>
					<SheetDescription>
						<form>
							<FieldGroup>
								<Controller
									name="username"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor={field.name}>Username</FieldLabel>
											<Input {...field} id={field.name} type="text" aria-invalid={fieldState.invalid} />
											{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
										</Field>
									)}
								/>
								<Controller
									name="email"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor={field.name}>Email</FieldLabel>
											<Input {...field} id={field.name} type="email" aria-invalid={fieldState.invalid} />
											{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
										</Field>
									)}
								/>
								<Controller
									name="phone"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor={field.name}>Phone</FieldLabel>
											<Input {...field} id={field.name} type="text" aria-invalid={fieldState.invalid} />
											{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
										</Field>
									)}
								/>
								<Controller
									name="location"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor={field.name}>Location</FieldLabel>
											<Input {...field} id={field.name} type="text" aria-invalid={fieldState.invalid} />
											{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
										</Field>
									)}
								/>
								<Controller
									name="role"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor={field.name}>Role</FieldLabel>
											<Select onValueChange={field.onChange} defaultValue={field.value}>
												<SelectTrigger>
													<SelectValue placeholder="Select a role" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="admin">Admin</SelectItem>
													<SelectItem value="user">User</SelectItem>
												</SelectContent>
											</Select>
											{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
										</Field>
									)}
								/>
							</FieldGroup>
						</form>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</div>
	);
}
