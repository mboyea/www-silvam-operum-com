import { Component, Setter, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Portal } from 'solid-js/web';
import Task from '../types/Task';

const TaskDialog: Component<{
	task: Task,
	isOpen: boolean,
	onClose: (task: Task) => (e: Event) => void,
	onSave: (task: Task) => (e: Event) => void,
	onDelete: (task: Task) => (e: Event) => void,
}> = (props) => {
	const [task, setTask] = createStore<Task>(props.task);

	return (
		<Show when={props.isOpen === true}>
			<Portal mount={document.getElementById('modal-root') as HTMLElement}>
				<form onSubmit={props.onSave(task)}>
					<header class='featured-img' style={'background-image: url(' + 'banner.png' + ');'}>
						<button class='float-left' onClick={props.onClose(task)}>❌</button>
						<button class='float-right' onClick={props.onDelete(task)}>🗑️</button>
						<input class='float-right' type='submit' value={'💾'}/>
					</header>
					<h2>
						<input
							type='text'
							id='task-title'
							value={props.task.title}
							onChange={(e) => setTask({['title']: e.currentTarget.value})}
						/>
					</h2>
					<hr />
					<p>
						// TODO: add recurrances
					</p>
					<p>
						// TODO: add instances
					</p>
					<hr />
					<p>
						<input
							type='text'
							id='task-description'
							value={props.task.description}
							onChange={(e) => setTask({['description']: e.currentTarget.value})}
						/>
					</p>
					<hr />
					<p>
						// TODO: add journal
					</p>
				</form>
			</Portal>
		</Show>
	);
};

export default TaskDialog;