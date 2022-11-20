import Task from "../types/Task";
import taskMocks from '../mocks/TaskMocks'

export const getTasksByUserUID = (user: string): Task[] => {
	// TODO: call API (axios?) to get user tasks from database
	return taskMocks;
}