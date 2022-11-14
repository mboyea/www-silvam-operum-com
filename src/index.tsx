import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './components/App';
import { TaskProvider } from './hooks/TaskProvider';
import { UserProvider } from './hooks/UserProvider';

render(
	() => (
		<UserProvider value={[]}>
			<TaskProvider value={[]}>
				<Router>
					<App />
				</Router>
			</TaskProvider>
		</UserProvider>
	),
	document.getElementById('root') as HTMLElement
);