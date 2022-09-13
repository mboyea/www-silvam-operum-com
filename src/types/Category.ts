import Task from './Task';

export default interface Category {
	title: string;
	description: string;
	tasks: Task[];
};