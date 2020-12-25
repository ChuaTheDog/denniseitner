import React from 'react';

import 'normalize.css';
import '../../assets/styles/styles.scss';
import Typography from '../../styles/Typography';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children }) {
	return (
		<div style={{ margin: `0 auto`, padding: `0` }}>
			<Typography></Typography>
			<Sidebar></Sidebar>
			{children}
		</div>
	);
}
