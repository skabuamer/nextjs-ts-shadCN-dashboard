// "use client";
import { columns, User } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
	return [
		{
			id: 1,
			name: "John Doe",
			email: "john@doe.com",
			role: "admin",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 2,
			name: "Jane Doe",
			email: "jane@doe.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 3,
			name: "John Smith",
			email: "john@smith.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 4,
			name: "Jane Smith",
			email: "jane@smith.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 5,
			name: "John Doe",
			email: "john@doe.com",
			role: "admin",
			status: "inactive",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 6,
			name: "Jane Doe",
			email: "jane@doe.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 7,
			name: "John Smith",
			email: "john@smith.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 8,
			name: "Jane Smith",
			email: "jane@smith.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 9,
			name: "John Doe",
			email: "john@doe.com",
			role: "admin",
			status: "inactive",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 10,
			name: "Jane Doe",
			email: "jane@doe.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 11,
			name: "John Smith",
			email: "john@smith.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 12,
			name: "Jane Smith",
			email: "jane@smith.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 13,
			name: "John Doe",
			email: "john@doe.com",
			role: "admin",
			status: "inactive",
			avatar: "https://github.com/shadcn.png",
		},
		{
			id: 14,
			name: "Jane Doe",
			email: "jane@doe.com",
			role: "user",
			status: "active",
			avatar: "https://github.com/shadcn.png",
		},
	];
};

export default async function () {
	const data = await getData();
	return (
		<div className="">
			<div className="mb-8 px-4 py-2 bg-secondary rounded-md">
				<h1 className="font-semibold mb-4">All Users</h1>
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
