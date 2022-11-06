import Task from "../types/Task";
import mockTasks from '../mocks/MockTasks'

export const getTasksByUserUID = (user: string): Task[] => {
	// TODO: call API (axios?) to get user tasks from database
	return mockTasks;
}