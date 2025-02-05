export type TodoListProps = {
	todos: {
		input: string;
		complete: boolean;
	}[];
	currentTab: string;
};

export type TodoTaskType = {
	todo: { input: string; complete: boolean };
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
