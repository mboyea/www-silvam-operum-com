import { Component, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import Task from '../types/Task';

const TaskDialog: Component<{
	task: Task,
	isOpen: boolean,
	handleClose: (task: Task) => void,
}> = (props) => {
	return (
		<Show when={props.isOpen === true}>
			<Portal>
				<div class='dialogue-container'>
					<button onClick={() => props.handleClose(props.task)}>Close</button>
					<h2>{props.task.title}</h2>
				</div>
			</Portal>
		</Show>
	);
};

export default TaskDialog;