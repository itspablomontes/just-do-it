import type { TodoTabsProps } from "../types/Types";

export default function Tabs({
	todos,
	currentTab,
	setCurrentTab,
}: TodoTabsProps) {
	const tabs = ["All", "Open", "Completed"];

	return (
		<nav className="flex justify-between md:gap-5 md:justify-center font-bold text-md">
			{tabs.map((tab, tabIndex) => {
				const numOfTasks =
					tab === "All"
						? todos.length
						: tab === "Open"
							? todos.filter((val) => !val.complete).length
							: todos.filter((val) => val.complete).length;
				return (
					<button
						onClick={() => setCurrentTab(tab)}
						type="button"
						key={tabIndex}
						className={`bg-amber-700 rounded-2xl px-1 py-1.5 md:p-3 hover:bg-amber-600 hover:scale-115  ${tab === currentTab ? "bg-amber-800 scale-90" : " "}`}
					>
						<div>{`${tab} (${numOfTasks})`}</div>
					</button>
				);
			})}
		</nav>
	);
}
