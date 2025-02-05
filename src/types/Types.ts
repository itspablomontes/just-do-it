export type Todo = {
	input: string;
	complete: boolean;
};

export type TodoListProps = {
	todos: Todo[];
	currentTab: string;
	handleCompleteTodo: (index: number) => void;
	handleDeleteTodo: (index: number) => void;
};

export type TodoCardProps = {
	todo: Todo;
	todoIndex: number;
	handleCompleteTodo: (index: number) => void;
	handleDeleteTodo: (index: number) => void;
};

export type TodoInputProps = {
	handleAddTodo: (newTodo: string) => void;
};

export type TodoTabsProps = {
	todos: Todo[];
	currentTab: string;
	setCurrentTab: (tab: string) => void;
};
