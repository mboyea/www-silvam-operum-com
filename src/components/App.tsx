import { Component } from 'solid-js';
import AppRoutes from './Routes';
import Header from './Header';
import Footer from './Footer';
import { TaskProvider } from '../hooks/TaskProvider';

const App: Component = () => {
	return (
		<TaskProvider>
			<Header />
			<AppRoutes />
			<Footer />
		</TaskProvider>
	);
}

export default App;