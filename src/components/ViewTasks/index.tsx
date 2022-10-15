import { Component } from 'solid-js';
import { useTasks } from 'src/hooks/TaskProvider';

const ViewTasks: Component = () => {
	const tasks = useTasks();
	return (
		// TODO: implement Tasks view
		<p>Tasks</p>
	);
}

export default ViewTasks;