import React from 'react';

import { Container } from 'react-bootstrap';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import MobileNav from '../Nav/MobileNav';
import ScrollButton from '../ScrollButton/ScrollButton';
import CookieBanner from '../CookieBanner/CookieBanner';
import '../../assets/styles/styles.scss';

export default function Layout({ children, withHeader = true }) {
	return (
		<>
			<CookieBanner />

			<Nav />
			<MobileNav />
			<Container fluid>
				<main>
					{withHeader && <Header />}
					{children}
				</main>
			</Container>
			<ScrollButton />
		</>
	);
}
