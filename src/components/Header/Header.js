import React from 'react';
import headerStyles from './header.module.scss';
const Header = (props) => {
	return (
		<div className={headerStyles.header}>
			<h1>{props.title}</h1>
		</div>
	);
};

export default Header;
