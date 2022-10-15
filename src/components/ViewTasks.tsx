import { Component } from 'solid-js';
import TaskList from './TaskList';
import { useTasks } from '../hooks/TaskProvider';

const ViewTasks: Component = () => {
	const tasks = useTasks();
	return (
		<TaskList tasks={tasks?.tasks} />
	);
}

export default ViewTasks;