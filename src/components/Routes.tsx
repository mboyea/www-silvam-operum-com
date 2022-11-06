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
			<Route path="/:user/tasks/:task?" component={ViewTasks} />
			<Route path="/:user/calendar" component={ViewCalendar} />
			// ? <Route path=":user/routines" />
		</Routes>
	);
}

export default AppRoutes;