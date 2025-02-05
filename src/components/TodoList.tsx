import TodoCard from "./TodoCard";
import type { TodoListProps } from "../types/Types";

export default function TodoList({
	todos,
	currentTab,
	handleDeleteTodo,
}: TodoListProps) {
	const todosLength = todos.length;
	const isTasksPlural = todosLength > 1;
	const filteredTodosList =
		currentTab === "All"
			? todos
			: currentTab === "Completed"
				? todos.filter((val) => val.complete)
				: todos.filter((val) => !val.complete);
	return (
		<div className="flex flex-col justify-center items-center md:text-2xl gap-2">
			<h2>
				You have<b> {todos.length}</b> {isTasksPlural ? "tasks" : "task"}
			</h2>
			<div className="flex flex-col gap-4">
				{filteredTodosList.map((todo, todoIndex) => {
					return (
						<TodoCard
							key={todoIndex}
							todo={todo}
							todoIndex={todoIndex}
							handleDeleteTodo={handleDeleteTodo}
						/>
					);
				})}
			</div>
		</div>
	);
}
