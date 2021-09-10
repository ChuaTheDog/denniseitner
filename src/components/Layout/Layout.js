import React from 'react';
import { Container } from 'react-bootstrap';
import 'normalize.css';
import '../../assets/styles/styles.scss';
import Seo from '../SEO/SEO';
import Nav from '../Nav/Nav';
import ScrollButton from '../ScrollButton/ScrollButton';

export default function Layout({ children }) {
	return (
		<>
			<Seo></Seo>
			<Nav />
			<Container fluid>{children}</Container>
			<ScrollButton />
		</>
	);
}
