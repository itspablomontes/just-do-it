export type TodoProps = {
	todos: {
		input: string;
		complete: boolean;
	}[];
};

export type TodoTaskType = {
	todo: { input: string; complete: boolean };
};
