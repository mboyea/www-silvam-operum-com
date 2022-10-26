import { Component } from 'solid-js';
import Task from '../types/Task';

const TaskDialogue: Component<{
	task: Task,
}> = (props) => {
	return (
		<div class='dialogue-container'>
			<h2>{props.task.title}</h2>
		</div>
	);
}

export default TaskDialogue;