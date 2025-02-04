import Tabs from "../components/Tabs";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useState } from "react";

export default function HomePage() {
	const [todos, setTodos] = useState([
		{ input: "Hello! Add your first todo!", complete: false },
	]);

	const handleAddTodo = (newTodo: string) => {
		const newTodoList = [...todos, { input: newTodo, complete: false }];
		setTodos(newTodoList);
	};

	return (
		<div className="px-8 sm:px-20 py-5 flex flex-col gap-5">
			<Tabs todos={todos} />
			<TodoList todos={todos} />
			<TodoInput handleAddTodo={handleAddTodo} />
		</div>
	);
}
