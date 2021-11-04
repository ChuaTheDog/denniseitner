import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { LINKS } from './Nav';

const StyledMobileNavBackground = styled.div`
	position: fixed;
	overflow: hidden;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: #ffd400;
	z-index: 1000;
	transition: transform 0.3s ease-in-out;
	overscroll-behavior: contain;

	transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
`;
const StyledMenu = styled.nav`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	useEffect(() => {
		if (isHidden) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isHidden]);

	return (
		<StyledMobileNavBackground open={open} aria-hidden={!isHidden} {...props}>
			<StyledMenu>
				{LINKS.map((link) => (
					<Link key={link.title} to={link.to}>
						{link.title}
					</Link>
				))}
			</StyledMenu>
		</StyledMobileNavBackground>
	);
};

export default MobileMenu;
