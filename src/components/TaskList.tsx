import { Component, createSignal, Show } from 'solid-js';
import Task from '../types/Task';

const TaskList: Component<{
	tasks: Task[],
	onClickTask: (task: Task) => (e: Event) => void,
}> = (props) => {
	return (
		<ul>
			{props.tasks.map((task) => (
				<li>
					<button onClick={props.onClickTask(task)}>
						<h3>{task.title}</h3>
					</button>
				</li>
			))}
		</ul>
	);
}

export default TaskList;