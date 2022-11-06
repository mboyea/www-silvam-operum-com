import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { useUser } from '../hooks/UserProvider';

const Navbar: Component = () => {
	const user = useUser();

	return (
		<nav aria-label='App Main Menu'>
			<ul>
				<li><A href={'/' + user?.get.uid + '/tasks'}>Tasks</A></li>
				<li><A href={'/' + user?.get.uid + '/calendar'}>Clndr</A></li>
			</ul>
		</nav>
	);
}

export default Navbar;