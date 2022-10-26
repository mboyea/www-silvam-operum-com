import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import ViewHome from './ViewHome';
import ViewTasks from './ViewTasks';
import ViewCalendar from './ViewCalendar';

const AppRoutes: Component = () => {
	// TODO: enable viewing /tasks/{id} with TaskDialogue
	return (
		<Routes>
			<Route path="/" component={ViewHome} />
			<Route path="/tasks" component={ViewTasks} />
			<Route path="/calendar" component={ViewCalendar} />
			// ? <Route path="/routines" />
		</Routes>
	);
}

export default AppRoutes;