"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

export default function todos() {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [open, setOpen] = useState(false);

	return (
		<div>
			<h1 className="mb-10 text-lg font-medium">Tasks</h1>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className="w-full">
						<CalendarIcon />
						{date ? format(date, "PPP") : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0 w-auto">
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
						className="rounded-md border"
					/>
				</PopoverContent>
			</Popover>
			<ScrollArea className="h-[410px] mt-4 overflow-y-auto">
				<div className="flex flex-col gap-4">
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item1" checked />
						<label htmlFor="item1">Accept terms and conditions</label>
					</Card>
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item2" />
						<label htmlFor="item2">Accept terms and conditions</label>
					</Card>
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item3" />
						<label htmlFor="item3">Accept terms and conditions</label>
					</Card>
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item4" />
						<label htmlFor="item4">Accept terms and conditions</label>
					</Card>
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item5" />
						<label htmlFor="item5">Accept terms and conditions</label>
					</Card>
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item6" />
						<label htmlFor="item6">Accept terms and conditions</label>
					</Card>
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item7" />
						<label htmlFor="item7">Accept terms and conditions</label>
					</Card>
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item8" />
						<label htmlFor="item8">Accept terms and conditions</label>
					</Card>
					<Card className="p-4 flex-row items-center gap-2">
						<Checkbox id="item9" />
						<label htmlFor="item9">Accept terms and conditions</label>
					</Card>
				</div>
			</ScrollArea>
		</div>
	);
}
