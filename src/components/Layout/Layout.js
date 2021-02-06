import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'normalize.css';
import '../../assets/styles/styles.scss';
import Sidebar from '../Sidebar/Sidebar';
import LayoutStyle from './layout.module.scss';

export default function Layout({ children }) {
	return (
		<div className={LayoutStyle.layoutWrapper}>
			<Container fluid>
				<Sidebar></Sidebar>
				{children}
			</Container>
		</div>
	);
}
