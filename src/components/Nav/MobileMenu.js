import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { LINKS } from './Nav';

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #ffd400;
	transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
	height: 100vh;
	width: 100vw;
	text-align: center;
	padding: 2rem;
	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	z-index: 500;
	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: #220f61;
		text-decoration: none;
		transition: color 0.3s linear;
		&:hover {
			color: #bf1a90;
		}
	}
`;

const MobileMenu = ({ active, open, ...props }) => {
	const isHidden = open ? true : false;
	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            {LINKS.map(link => (
                <Link key={link.title} to={link.to}>
                    {link.title}
                </Link>
            ))}
		</StyledMenu>
	);
};

export default MobileMenu;