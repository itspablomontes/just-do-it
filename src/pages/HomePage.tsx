import Tabs from "../components/Tabs";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import type { Todo } from "../types/Types";

export default function HomePage() {
	const [todos, setTodos] = useState([
		{ input: "Hello! Add your first todo!", complete: false },
	]);
	const [currentTab, setCurrentTab] = useState("Open");
	console.log(todos);
	const handleAddTodo = (newTodo: string) => {
		const newTodoList = [...todos, { input: newTodo, complete: false }];
		setTodos(newTodoList);
		handleSaveData(newTodoList);
	};

	const handleCompleteTodo = (index: number) => {
		const newTodoList = [...todos];
		const completedTodo = todos[index];
		completedTodo.complete = true;
		newTodoList[index] = completedTodo;
		setTodos(newTodoList);
		handleSaveData(newTodoList);
	};

	const handleDeleteTodo = (index: number) => {
		const newTodoList = todos.filter((val, valIndex) => {
			return valIndex !== index;
		});
		setTodos(newTodoList);
		handleSaveData(newTodoList);
	};
	const KEY = "just-do-it";
	const handleSaveData = (currentTodos: Todo[]) => {
		localStorage.setItem(KEY, JSON.stringify({ currentTodos }));
	};
	useEffect(() => {
		if (!localStorage || !localStorage.getItem(KEY)) {
			return;
		}
		const db = JSON.parse(localStorage.getItem(KEY) ?? "{}");
		setTodos(db.currentTodos);
	}, []);

	return (
		<div className="px-8 sm:px-20 py-5 flex flex-col gap-5">
			<Tabs
				todos={todos}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
			<TodoList
				todos={todos}
				currentTab={currentTab}
				handleCompleteTodo={handleCompleteTodo}
				handleDeleteTodo={handleDeleteTodo}
			/>
			<TodoInput handleAddTodo={handleAddTodo} />
		</div>
	);
}
