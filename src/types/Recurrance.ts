import Task from './Task';

export enum RecurranceType {
	NONE = '',
	DAY = 'DAY',
	WEEK = 'WEEK',
	MONTH = 'MONTH',
	YEAR = 'YEAR',
};

// TODO: export interface RecurrancePattern {}

export default interface Recurrance {
	task: Task;
	type: RecurranceType;
	period: number;
	count: number;
	// TODO: pattern: RecurrancePattern;
};