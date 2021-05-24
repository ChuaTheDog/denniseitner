import React from 'react';
import { Container } from 'react-bootstrap';
import 'normalize.css';
import '../../assets/styles/styles.scss';
import Sidebar from '../Sidebar/Sidebar';
import Seo from '../SEO/SEO';

export default function Layout({ children }) {
	return (
		<>
			<Seo></Seo>
			<div>
				<Container fluid>
					<Sidebar></Sidebar>
					{children}
				</Container>
			</div>
		</>
	);
}
