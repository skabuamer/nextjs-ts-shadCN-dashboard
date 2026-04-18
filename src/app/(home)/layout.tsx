export default function HomeLayout({ children, appBarChart, appAreaChart, appPieChart, transCardList, popularContent, todos }: { children: React.ReactNode; appBarChart: React.ReactNode; appAreaChart: React.ReactNode; appPieChart: React.ReactNode; transCardList: React.ReactNode; popularContent: React.ReactNode; todos: React.ReactNode }) {
	return (
		<>
			<main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
				<div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">{appBarChart}</div>
				<div className="bg-primary-foreground p-4 rounded-lg">{transCardList}</div>
				<div className="bg-primary-foreground p-4 rounded-lg">{appPieChart}</div>
				<div className="bg-primary-foreground p-4 rounded-lg">{todos}</div>
				<div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">{appAreaChart}</div>
				<div className="bg-primary-foreground p-4 rounded-lg">{popularContent}</div>
			</main>
			{children}
		</>
	);
}
