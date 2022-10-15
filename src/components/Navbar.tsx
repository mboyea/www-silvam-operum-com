import { Component } from 'solid-js';
import { NavLink } from '@solidjs/router';

const Navbar: Component = () => {
	return (
		<nav aria-label='App Main Menu'>
			<ul>
				<li><NavLink href='/tasks'>Tasks</NavLink></li>
				<li><NavLink href='/calendar'>Clndr</NavLink></li>
			</ul>
		</nav>
	);
}

export default Navbar;