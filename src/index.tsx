import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './components/App';
import { TaskProvider } from './hooks/TaskProvider';
import { UserProvider } from './hooks/UserProvider';

render(
	() => (
		<TaskProvider value={[]}>
			<UserProvider value={{uid: ''}}>
				<Router>
					<App />
				</Router>
			</UserProvider>
		</TaskProvider>
	),
	document.getElementById('root') as HTMLElement
);