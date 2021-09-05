import React from 'react';
import { Container } from 'react-bootstrap';
import 'normalize.css';
import '../../assets/styles/styles.scss';
import Sidebar from '../Sidebar/Sidebar';
import Seo from '../SEO/SEO';
import Nav from '../Nav/Nav';

export default function Layout({ children }) {
	return (
		<>
			<Seo></Seo>
			<Nav />
			<div>
				<Container fluid>{children}</Container>
			</div>
		</>
	);
}
