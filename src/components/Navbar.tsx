import { Component } from 'solid-js';
import { A } from '@solidjs/router';

const Navbar: Component = () => {
	return (
		<nav aria-label='App Main Menu'>
			<ul>
				<li><A href='/tasks'>Tasks</A></li>
				<li><A href='/calendar'>Clndr</A></li>
			</ul>
		</nav>
	);
}

export default Navbar;