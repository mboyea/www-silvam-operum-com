import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

const AppRoutes: Component = () => {
	return (
		<Routes>
			// TODO: implement pages
			<Route path="/" element={<></>} />
			<Route path="/tasks" element={<></>} />
			<Route path="/calendar" element={<></>} />
			// ? <Route path="/routines" element={<></>} />
		</Routes>
	);
}

export default AppRoutes;