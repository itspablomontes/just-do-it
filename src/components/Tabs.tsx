import type { TodoProps } from "../types/Types";

export default function Tabs({ todos }: TodoProps) {
	const tabs = ["All", "Open", "Completed"];
	return (
		<nav className="flex justify-between md:gap-5 md:justify-center font-bold">
			{tabs.map((tab, tabIndex) => {
				const numOfTasks =
					tab === "All"
						? todos.length
						: tab === "Open"
							? todos.filter((val) => !val.complete).length
							: todos.filter((val) => val.complete).length;
				return (
					<button
						type="button"
						key={tabIndex}
						className="bg-amber-700 rounded-2xl p-2 hover:bg-amber-600 hover:scale-115"
					>
						<div>{`${tab} (${numOfTasks})`}</div>
					</button>
				);
			})}
		</nav>
	);
}
