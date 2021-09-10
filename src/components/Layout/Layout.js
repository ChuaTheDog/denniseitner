import React from 'react';
import { Container } from 'react-bootstrap';
import 'normalize.css';
import '../../assets/styles/styles.scss';
import Seo from '../SEO/SEO';
import Nav from '../Nav/Nav';
import MobileNav from '../Nav/MobileNav';
import ScrollButton from '../ScrollButton/ScrollButton';

export default function Layout({ children }) {
	return (
		<>
			<Seo></Seo>
			<Nav />
			<MobileNav></MobileNav>
			<Container fluid>{children}</Container>
			<ScrollButton />
		</>
	);
}
