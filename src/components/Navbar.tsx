"use client";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	return (
		<nav className="p-4 sticky top-0 z-40 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 backdrop-blur-2xl">
			{/* left */}
			<SidebarTrigger />

			{/* right */}
			<div className="flex items-center gap-4">
				<Link href="/">Dashboard</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon">
							<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar>
							<AvatarImage src="https://avatars.githubusercontent.com/u/97892768?v=4" alt="@shadcn" className="" />
							<AvatarFallback>AA</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuGroup>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<User /> Profile
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Settings /> Settings
							</DropdownMenuItem>
							<DropdownMenuItem variant="destructive">
								<LogOut /> Log Out
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Navbar;
