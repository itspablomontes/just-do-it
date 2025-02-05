export type TodoListProps = {
	todos: {
		input: string;
		complete: boolean;
	}[];
	currentTab: string;
	handleDeleteTodo: (index: number) => void;
};

export type TodoCardProps = {
	todo: { input: string; complete: boolean };
	todoIndex: number;
	handleDeleteTodo: (index: number) => void;
};

export type TodoInputProps = {
	handleAddTodo: (newTodo: string) => void;
};

export type TodoTabsProps = {
	todos: {
		input: string;
		complete: boolean;
	}[];
	currentTab: string;
	setCurrentTab: (tab: string) => void;
};
