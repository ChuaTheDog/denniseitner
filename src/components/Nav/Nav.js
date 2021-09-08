import React from 'react';
import * as navStyles from './nav.module.scss';
import Home from '../../assets/svg/Home.svg';

const Nav = () => {
	return (
		<div className={navStyles.navWrapper} id='nav'>
			<a href='/'>
				<Home className={navStyles.home}></Home>
			</a>
			<nav className={navStyles.nav}>
				<a className={navStyles.navItem} href='/about'>
					About
				</a>
				<a className={navStyles.navItem} href='/friends'>
					Friends
				</a>
				<a className={navStyles.navItem} href='/blog'>
					Blog
				</a>
				<a className={navStyles.navItem} href='/contact'>
					Contact
				</a>
			</nav>
		</div>
	);
};

export default Nav;
