import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activestyle>
			Home
		</NavLink>
		<NavLink to='/events' activestyle>
			My Goals
		</NavLink>
		<NavLink to='/annual' activestyle>
			Schedule
		</NavLink>
		<NavLink to='/team' activestyle>
			Achievements
		</NavLink>
		<NavLink to='/blogs' activestyle>
			MyPlaylist
		</NavLink>
		<NavLink to='/sign-up' activestyle>
			Calendar
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
