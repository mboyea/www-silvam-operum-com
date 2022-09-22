import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import ViewHome from '../ViewTasks';
import ViewTasks from '../ViewTasks';
import ViewCalendar from '../ViewCalendar';

const AppRoutes: Component = () => {
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