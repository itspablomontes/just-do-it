import Tabs from "../components/Tabs";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const todos = [
	{ input: "Hello! Add your first todo!", complete: true },
	{ input: "Study English", complete: false },
	{ input: "Learn how to program", complete: true },
	{ input: "Pass the interview", complete: false },
];

export default function HomePage() {
	return (
		<div className="px-8 sm:px-20 py-5 flex flex-col gap-5">
			<Tabs todos={todos} />
			<TodoList todos={todos} />
			<TodoInput />
		</div>
	);
}
