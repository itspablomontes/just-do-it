import type { TodoCardProps } from "../types/Types";

export default function TodoCard({
	todo,
	todoIndex,
	handleCompleteTodo,
	handleDeleteTodo,
}: TodoCardProps) {
	return (
		<div className="flex flex-col gap-1 bg-blue-600 rounded-2xl font-bold p-5 w-2xs break-words">
			<p className="text-base md:text-xl overflow-scroll">{todo.input}</p>
			<div className="flex gap-4 items-center text-sm max-h-28	">
				<button
					className="bg-emerald-400 p-1 rounded-md disabled:bg-emerald-700 hover:scale-110"
					disabled={todo.complete}
					onClick={() => handleCompleteTodo(todoIndex)}
				>
					Complete
				</button>
				<button
					className="bg-red-400 p-1 rounded-md hover:scale-110"
					onClick={() => handleDeleteTodo(todoIndex)}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
