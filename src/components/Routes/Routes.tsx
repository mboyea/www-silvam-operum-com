import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router'

// TODO: delete and replace with real pages
const Temp: Component = () => {
	return <h2>Temp</h2>;
}

const AppRoutes: Component = () => {
	return (
		<>
			// TODO: insert Header
			<Routes>
				<Route path="/" element={<h2>Home</h2>} />
				// TODO: outline and implement subpages
				<Route path="/calendar" component={Temp} />
				<Route path="/tasks" component={Temp} />
				<Route path="/routines" component={Temp} />
			</Routes>
			// TODO: insert Footer
		</>
	);
}

export default AppRoutes;