import { Component } from 'solid-js';
import TaskList from './TaskList';
import { useTasks } from '../hooks/TaskProvider';

const ViewTasks: Component = () => {
	const tasks = useTasks();
	// TODO: handle undefined case (loading...)
	return (
		<TaskList tasks={tasks?.get} />
	);
}

export default ViewTasks;