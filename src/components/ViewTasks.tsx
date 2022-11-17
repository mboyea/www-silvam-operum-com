import { Component, Show } from 'solid-js';
import { useParams } from '@solidjs/router';
import { useTasks } from '../hooks/TaskProvider';
import { useUser } from '../hooks/UserProvider';
import { getTasksByUserUID } from '../api/TaskRequests';
import TaskList from './TaskList';

const ViewTasks: Component = () => {
	const urlParams = useParams();
	const user = useUser();
	const tasks = useTasks();

	// TODO: make this async
	// if user in URL is different than the active user
	if (user?.getActive() !== urlParams.user) {
		// update active user
		user?.setActive(urlParams.user);
		// update tasks
		tasks?.set(getTasksByUserUID(user?.getActive() as string));
	}

	return (
		(tasks === undefined) ? (
			<p>
				undefined//TODO: Error: Task context cannot be resolved.
			</p>
		) : (
			<TaskList tasks={tasks?.get} />
		)
	);
}

export default ViewTasks;