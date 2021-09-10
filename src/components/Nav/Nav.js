import React, { useState, useEffect } from 'react';

import * as navStyles from './nav.module.scss';
import Home from '../../assets/svg/Home.svg';
import MobileNav from './MobileNav';

const Nav = () => {
	const [pos, setPos] = useState('top');
	useEffect(() => {
		document.addEventListener('scroll', (e) => {
			let scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 400) {
				setPos('moved');
			} else {
				setPos('top');
			}
		});
	}, []);
	return (
		<div className={navStyles.navWrapper} id='nav'>
			<a href='/'>
				<Home className={navStyles.home}></Home>
			</a>

			<nav
				className={navStyles.nav}
				/*style={{
					backgroundImage:
						pos === 'top'
							? ''
							: 'linear-gradient(#bf1a90 0%, rgba(255, 255, 255, 0) 100%)',
				}}*/
				style={{
					backgroundColor:
						pos === 'top' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, .5)',
				}}>
				<a className={navStyles.navItem} href='/about'>
					About
				</a>
				<a className={navStyles.navItem} href='/friends'>
					Friends
				</a>

				<a className={navStyles.navItem} href='/contact'>
					Contact
				</a>
			</nav>
		</div>
	);
};

export default Nav;
