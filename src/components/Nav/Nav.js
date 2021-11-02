import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Home from '../../assets/svg/Home.svg';

export const LINKS = [
    {
        title: 'About',
        to: '/about'
    },
    {
        title: 'Friends',
        to: '/friends'
    },
    {
        title: 'Contact',
        to: '/contact'
    }
]

const Nav = () => {

	const [ pos, setPos ] = useState('top');

	useEffect(() => {
		document.addEventListener('scroll', e => {
			const scrolled = document.scrollingElement.scrollTop;
            setPos(scrolled >= 400 ? 'moved' : 'top');
		});

	}, []);

    const [ links ] = useState(LINKS);

	return (
		<div className="navigation__wrapper" id='nav'>
			<Link to='/' className="navigation__home--link">
				<Home className="navigation__home" />
			</Link>
			<nav className="navigation" style={{ backgroundColor: pos === 'top' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, .5)' }}>
				{links.map(link => (
                    <Link key={link.title} className="navigation__link" to={link.to}>
                        {link.title}
                    </Link>
                ))}
			</nav>
		</div>
	);
};

export default Nav;
