import { Component, createSignal, Show } from 'solid-js';
import Task from '../types/Task';
import TaskDialog from './TaskDialog';
import mockTasks from '../mocks/MockTasks';

const TaskList: Component<{
	tasks: Task[],
}> = (props) => {
	const [activeTask, setActiveTask] = createSignal<Task>(mockTasks[0]);
	const [taskOpen, setTaskOpen] = createSignal<boolean>(false);

	const handleTaskOpen = (task: Task) => {
		setActiveTask(task);
		setTaskOpen(true);
	}

	const handleTaskClose = (task: Task) => {
		setTaskOpen(false);
	}

	return (
		<>
			<TaskDialog
				task={activeTask()}
				isOpen={taskOpen()}
				handleClose={handleTaskClose}
			/>
			<ul>
				{props.tasks.map((task) => (
					<li>
						<button onClick={() => handleTaskOpen(task)}>
							<h3>{task.title}</h3>
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default TaskList;