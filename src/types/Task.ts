import Instance from './Instance';
import Recurrance from './Recurrance';

export default interface Task {
	title: string;
	description: string;
	category: string;
	instances: Instance[];
	recurrances: Recurrance[];
};