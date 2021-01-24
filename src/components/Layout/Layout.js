import React from 'react';

import 'normalize.css';
import '../../assets/styles/styles.scss';
import Sidebar from '../Sidebar/Sidebar';
import LayoutStyle from './layout.module.scss';

export default function Layout({ children }) {
	return (
		<div className={LayoutStyle.layoutWrapper}>
			<Sidebar></Sidebar>
			{children}
		</div>
	);
}
