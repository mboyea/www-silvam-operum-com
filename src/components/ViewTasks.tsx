import { Component } from 'solid-js';
import TaskList from './TaskList';
import { useTasks } from '../hooks/TaskProvider';

const ViewTasks: Component = () => {
	const tasks = useTasks();
	
	return (tasks === undefined) ? (
		<p>loading...</p>
	) : (
		<TaskList tasks={tasks?.get} />
	);
}

export default ViewTasks;