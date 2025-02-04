import { Plus } from "lucide-react";

export default function TodoInput() {
	return (
		<div className="flex justify-between md:justify-center md:gap-6 items-center">
			<input
				placeholder="Type your task..."
				className="outline-none bg-zinc-800 p-2  rounded-xl md:w-full md:max-w-[20%]"
			/>
			<button className="bg-amber-600 rounded-full p-2">
				<Plus size={window.outerWidth > 1000 ? 34 : 25} />
			</button>
		</div>
	);
}
