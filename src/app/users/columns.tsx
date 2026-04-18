"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

export type User = {
	id: number;
	name: string;
	email: string;
	role: "admin" | "user";
	status: "active" | "inactive";
	avatar: string;
};
export const columns: ColumnDef<User>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<Link href="/users/john" className="capitalize">
				{row.original.name}
			</Link>
		),
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "role",
		header: "Role",
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => <div className={cn("capitalize text-xs px-2 py-1 rounded-full", row.original.status === "active" ? "bg-green-500 text-black" : "bg-red-900 text-red-100")}>{row.original.status}</div>,
	},
	{
		accessorKey: "avatar",
		header: "Avatar",
		cell: ({ row }) => <img src={row.original.avatar} alt={row.original.name} className="w-10 h-10 rounded-full" />,
	},
];
