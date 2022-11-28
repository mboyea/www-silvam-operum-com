import { Component, JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import Task from "../types/Task";

export interface TaskContextModel {
	get: Task[];
	set: (tasks: Task[]) => void;
	add: (task: Task) => void;
	update: (task: Task) => void;
	delete: (task: Task) => void;
}

export const TaskContext = createContext<TaskContextModel>();

export const TaskProvider: Component<{
	value: Task[],
	children?: JSX.Element,
}> = (props) => {
	const [tasks, setTasks] = createStore<Task[]>(props.value);
	const store: TaskContextModel = {
		get: tasks,
		set: setTasks,
		add: (task: Task) => {},
		update: (task: Task) => {},
		delete: (task: Task) => {},
	};
	return (
		<TaskContext.Provider value={store}>
			{props.children}
		</TaskContext.Provider>
	);
}

export const useTasks = () => {
	return useContext(TaskContext);
}