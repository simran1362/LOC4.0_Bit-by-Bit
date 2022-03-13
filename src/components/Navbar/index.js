import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink target="_blank" to='/home' activestyle>
			Home
		</NavLink>
		<NavLink target="_blank" to='/mygoals' activestyle>
			My Goals
		</NavLink>
		<NavLink target="_blank" to='/schedule' activestyle>
			Schedule
		</NavLink>
		<NavLink target="_blank" to='/achievements' activestyle>
			Achievements
		</NavLink>
		<NavLink target="_blank" to='/myPlaylist' activestyle>
			MyPlaylist
		</NavLink>
		<NavLink target="_blank" to='/calender' activestyle>
			Calendar
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>SignIn</NavBtnLink>
		<NavBtnLink to='/signup'>SignUp</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};
export default Navbar;
