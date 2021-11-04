import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const styles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		left: '18px',
		top: '18px',
	},
	bmBurgerBars: {
		background: '#fff',
	},
	bmBurgerBarsHover: {
		background: '#a90000',
	},
	bmCrossButton: {
		width: '36px',
		height: '30px',
	},
	bmCross: {
		background: '#fff',
	},
	bmMenuWrap: {
		//	width: '20vw',
	},
	bmOverlay: {
		height: 'auto',
	},
	bmItem: {
		//	padding: '0.5rem',
	},
};

const Sidebar = (props) => {
	return (
		<Menu styles={styles} className="sidebar">
			<a className='menu-item' href='/'>
				Home
			</a>
			<a className='menu-item' href='/about'>
				About
			</a>
			<a className='menu-item' href='/friends'>
				Friends
			</a>
			<a className='menu-item' href='/blog'>
				Blog
			</a>
			<a className='menu-item' href='/contact'>
				Contact
			</a>
		</Menu>
	);
};
export default Sidebar;
