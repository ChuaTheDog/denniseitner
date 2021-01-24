import React from 'react';

import 'normalize.css';
import '../../assets/styles/styles.scss';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children }) {
	return (
		<div style={{ margin: `0 auto`, padding: `0` }}>
			<Sidebar></Sidebar>

			{children}
		</div>
	);
}
