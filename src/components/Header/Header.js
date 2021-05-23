import React from 'react';
import * as headerStyles from './header.module.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = (props) => {
	return (
		<div className={headerStyles.header}>
			<h1>{props.title}</h1>
		</div>
	);
};

export default Header;
