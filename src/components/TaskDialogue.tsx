import { Component } from 'solid-js';
import { Portal } from 'solid-js/web';
import Task from '../types/Task';

const TaskDialogue: Component<{
	task: Task | undefined,
}> = (props) => {
	return (
		(props.task === undefined) ? (
			<></>
		) : (
			<Portal>
				<div class='dialogue-container'>
					<h2>{props.task.title}</h2>
				</div>
			</Portal>
		)
	);
}

export default TaskDialogue;