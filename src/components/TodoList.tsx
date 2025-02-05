import TodoCard from "./TodoCard";
import type { TodoListProps } from "../types/Types";

export default function TodoList({
	todos,
	currentTab,
	handleCompleteTodo,
	handleDeleteTodo,
}: TodoListProps) {
	const todosLength = todos.length;
	const isTasksPlural = todosLength > 1;
	const noTasks = todosLength === 0;
	const filteredTodosList =
		currentTab === "All"
			? todos
			: currentTab === "Completed"
				? todos.filter((val) => val.complete)
				: todos.filter((val) => !val.complete);
	return (
		<div className="flex flex-col justify-center items-center md:text-2xl max-w">
			<h2>
				You have<b> {todos.length}</b>{" "}
				{noTasks ? "open tasks" : isTasksPlural ? "open tasks" : "open task"}
			</h2>
			<div className="flex flex-col gap-4">
				{filteredTodosList.map((todo, todoIndex) => {
					return (
						<TodoCard
							key={todoIndex}
							todo={todo}
							todoIndex={todos.findIndex((val) => val.input === todo.input)}
							handleCompleteTodo={handleCompleteTodo}
							handleDeleteTodo={handleDeleteTodo}
						/>
					);
				})}
			</div>
		</div>
	);
}
