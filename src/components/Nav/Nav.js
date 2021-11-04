import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Home from '../../assets/svg/Home.svg';

export const LINKS = [
	{
		title: 'About',
		to: '/about',
	},
	{
		title: 'Friends',
		to: '/friends',
	},
	{
		title: 'Blog',
		to: '/blog',
	},
	{
		title: 'Contact',
		to: '/contact',
	},
];

const Nav = () => {
	const [pos, setPos] = useState('top');

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const scrolled = document.scrollingElement.scrollTop;
			setPos(scrolled >= 200 ? 'moved' : 'top');
		});
	}, []);

	const [links] = useState(LINKS);

	return (
		<div>
			<Link to='/' className='homeLink'>
				<Home className='home' />
			</Link>
			<div className='' id='nav'>
				<nav
					className='navigation'
					style={{
						backgroundColor:
							pos === 'top' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, .5)',
					}}>
					{links.map((link) => (
						<Link key={link.title} className='navigation__link' to={link.to}>
							{link.title}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
};

export default Nav;
