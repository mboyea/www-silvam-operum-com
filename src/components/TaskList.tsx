import { Component, createSignal, Show } from 'solid-js';
import Task from '../types/Task';
import TaskDialogue from './TaskDialogue';

const TaskList: Component<{
	tasks: Task[],
}> = (props) => {
	const [activeTask, setActiveTask] = createSignal<Task>();
	// TODO make a delete task button

	// TODO: fix reactivity of TaskDialogue
	return (
		<>
			<TaskDialogue task={activeTask()} />
			<ul>
				{props.tasks.map((task) => (
					<li>
						<button onClick={(e) => setActiveTask(task)}>
							<h3>{task.title}</h3>
							<p>{task.description}</p>
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default TaskList;