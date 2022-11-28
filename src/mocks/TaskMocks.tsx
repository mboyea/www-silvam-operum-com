import Task from "../types/Task";

const taskMocks: Task[] = [
	{
		uid: 0,
		title: 'Uh oh!',
		description: 'Something went wrong. Please reload the app.',
		category: 'Error',
		instances: [],
		recurrances: [],
	},
	{
		uid: 1,
		title: 'mock task 1',
		description: 'description of mock task 1',
		category: 'Mocks',
		instances: [],
		recurrances: [],
	},
	{
		uid: 2,
		title: 'Mock task 2',
		description: 'Description of mock task 2',
		category: 'Mocks',
		instances: [],
		recurrances: [],
	},
	{
		uid: 3,
		title: 'Mock Task 3',
		description: 'Description of mock task 3',
		category: 'Mocks (New)',
		instances: [],
		recurrances: [],
	},
]

export default taskMocks;