import { Component } from 'solid-js';
import Task from '../types/Task';

const TaskList: Component<{
	tasks: Task[],
}> = (props) => {
	return (
		<ul>
			{props.tasks.map((task) => (
				<li>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
				</li>
			))}
		</ul>
	);
}

export default TaskList;