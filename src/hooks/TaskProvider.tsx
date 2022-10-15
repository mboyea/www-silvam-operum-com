import { Component, JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import Task from "../types/Task";

export interface TaskContextModel {
	tasks: Task[];
	addTask: () => void;
}

export const TaskContext = createContext<TaskContextModel>();

export const TaskProvider: Component<{
	children?: JSX.Element,
}> = (props) => {
	const [tasks, setTasks] = createStore<Task[]>([]);
	const store = {
		tasks,
		addTask: () => {},
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