import { Component, JSX, createContext, createSignal, useContext } from "solid-js";
import Task from "../types/Task";

export const TaskContext = createContext();

export const TaskProvider: Component<{
	children?: JSX.Element,
}> = (props) => {
	const [tasks, setTasks] = createSignal<Task[]>([]);
	const store = [
		tasks,
		setTasks
	];
	return (
		<TaskContext.Provider value={store}>
			{props.children}
		</TaskContext.Provider>
	);
}

export const useTasks = () => {
	return useContext(TaskContext);
}