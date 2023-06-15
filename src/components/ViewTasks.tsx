import { Component, createSignal } from 'solid-js';
import { useParams } from '@solidjs/router';
import { useTasks } from '../hooks/TaskProvider';
import { useUser } from '../hooks/UserProvider';
import { getTasks, saveTask } from '../api/TaskRequests';
import Task from "../types/Task";
import taskMocks from '../mocks/TaskMocks';
import TaskDialog from './TaskDialog';
import TaskList from './TaskList';

const ViewTasks: Component = () => {
	const urlParams = useParams();
	const user = useUser();
	const tasks = useTasks();

	// TODO: make this async to allow for loading screen
	// if user in URL is different than the active user
	if (user?.getActive() !== urlParams.user) {
		// update active user
		user?.setActive(urlParams.user);
		// update tasks
		tasks?.set(getTasks(user?.getActive() as string));
	}
	
	const [activeTask, setActiveTask] = createSignal<Task>({...taskMocks[0]});
	const [taskOpen, setTaskOpen] = createSignal<boolean>(false);

	const onOpenTask = (task: Task) => () => {
		setActiveTask(task);
		setTaskOpen(true);
	}
	const onCloseTask = (task: Task) => () => {
		setTaskOpen(false);
	}
	const onSaveTask = (task: Task) => () => {
		// TODO: make this api call async to then trigger 'task saved' popup on completion
		saveTask(task, activeTask());
		tasks?.update(task);
	};
	const onDeleteTask = (task: Task) => () => {
		// TODO: implement task deleting
		onCloseTask(task)();
	};

	// TODO: add search bar
	// TODO: add filter controls
	// TODO: add 'new task' button
	return (
		(tasks === undefined) ? (
			<p>
				// TODO: Error: Task context cannot be resolved.
			</p>
		) : (
			<>
				<TaskList
					tasks={tasks?.get}
					onClickTask={onOpenTask}
				/>
				<TaskDialog
					task={activeTask()}
					isOpen={taskOpen()}
					onClose={onCloseTask}
					onSave={onSaveTask}
					onDelete={onDeleteTask}
				/>
			</>
		)
	);
}

export default ViewTasks;