import { Component } from 'solid-js';
import { useParams } from '@solidjs/router';
import { useTasks } from '../hooks/TaskProvider';
import { useUser } from '../hooks/UserProvider';
import { getTasksByUserUID } from '../api/TaskRequests';
import TaskList from './TaskList';

const ViewTasks: Component = () => {
	const urlParams = useParams();
	const user = useUser();
	const tasks = useTasks();

	// if user in URL is different, update user & reload tasks
	if (urlParams.user !== user?.get.uid) {
		user?.set({
			uid: urlParams.user,
		})
		tasks?.set(getTasksByUserUID(user?.get.uid as string));
	}

	return (tasks === undefined) ? (
		<p>loading...</p>
	) : (
		<TaskList tasks={tasks?.get} />
	);
}

export default ViewTasks;