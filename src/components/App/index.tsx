import { Component } from 'solid-js';
import AppRoutes from '../Routes';
import Header from '../Header';
import Footer from '../Footer';

const App: Component = () => {
	return (
		<>
			<Header />
			<AppRoutes />
			<Footer />
		</>
	);
}

export default App;