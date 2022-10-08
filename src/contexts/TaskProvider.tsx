import { Component, JSX, createContext, createSignal } from "solid-js";
import Task from "../types/Task";

export const TaskContext = createContext();

export const TaskProvider: Component<{
	children?: JSX.Element,
}> = (props) => {
	const [tasks, setTasks] = createSignal<Task[]>([]);
	const store = [
		tasks
	];
	return (
		<TaskContext.Provider value={store}>
			{props.children}
		</TaskContext.Provider>
	);
}