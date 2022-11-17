import { Component, createSignal, Show } from 'solid-js';
import Task from '../types/Task';
import TaskDialog from './TaskDialog';
import mockTasks from '../mocks/MockTasks';

const TaskList: Component<{
	tasks: Task[],
}> = (props) => {
	const [activeTask, setActiveTask] = createSignal<Task>(mockTasks[0]);
	const [taskOpen, setTaskOpen] = createSignal<boolean>(false);

	const onOpenTask = (task: Task) => () => {
		setActiveTask(task);
		setTaskOpen(true);
	}
	const onCloseTask = (task: Task) => () => {
		setTaskOpen(false);
	}
	const onSaveTask = (task: Task) => () => {
		// TODO: implement task saving
		onCloseTask(task)();
	};
	const onDeleteTask = (task: Task) => () => {
		// TODO: implement task deleting
		onCloseTask(task)();
	};
	const onDuplicateTask = (task: Task) => () => {
		// TODO: implement task duplicating
		onCloseTask(task)();
	};

	// TODO: add search bar
	// TODO: add filter controls
	// TODO: add 'new task' button
	// TODO: fix strange state behavior where editing TaskDialog form changes element 0 of TaskProvider
	return (
		<>
			<TaskDialog
				task={activeTask()}
				isOpen={taskOpen()}
				onClose={onCloseTask}
				onSave={onSaveTask}
				onDelete={onDeleteTask}
				onDuplicate={onDuplicateTask}
			/>
			<ul>
				{props.tasks.map((task) => (
					<li>
						<button onClick={onOpenTask(task)}>
							<h3>{task.title}</h3>
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default TaskList;