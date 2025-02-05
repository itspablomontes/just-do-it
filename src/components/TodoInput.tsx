import { Plus } from "lucide-react";
import { useState } from "react";
import type { TodoInputProps } from "../types/Types";

export default function TodoInput({ handleAddTodo }: TodoInputProps) {
	const [inputValue, setInputValue] = useState("");
	console.log(inputValue);
	return (
		<div className="flex justify-between md:justify-center md:gap-6 items-center">
			<input
				placeholder="Type your task..."
				className="outline-none bg-zinc-800 p-2  rounded-xl md:w-full md:max-w-[20%]"
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<button
				className="bg-amber-600 rounded-full p-2"
				onClick={() => {
					if (!inputValue) {
						return;
					}
					handleAddTodo(inputValue);
					setInputValue("");
				}}
			>
				<Plus size={window.outerWidth > 1000 ? 34 : 25} />
			</button>
		</div>
	);
}
