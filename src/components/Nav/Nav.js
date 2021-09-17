import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Home from '../../assets/svg/Home.svg';

import * as navStyles from './nav.module.scss';

const Nav = () => {

	const [ pos, setPos ] = useState('top');

	useEffect(() => {
		document.addEventListener('scroll', e => {
			const scrolled = document.scrollingElement.scrollTop;
            setPos(scrolled >= 400 ? 'moved' : 'top');
		});

	}, []);

    const [ links ] = useState([
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
    ]);

	return (
		<div className={navStyles.navWrapper} id='nav'>
			<Link to='/' className={navStyles.homeLink}>
				<Home className={navStyles.home} />
			</Link>
			<nav className={navStyles.nav} style={{ backgroundColor: pos === 'top' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, .5)' }}>
				{links.map(link => (
                    <Link key={link.title} className={navStyles.navItem} to={link.to}>
                        {link.title}
                    </Link>
                ))}
			</nav>
		</div>
	);
};

export default Nav;
