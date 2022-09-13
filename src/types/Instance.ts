import Task from './Task';
import Notification from './Notification';

export default interface Instance {
	task: Task;
	journal: string;
	notification: Notification;
	// TODO: startTime
	// TODO: ?stopTime
};