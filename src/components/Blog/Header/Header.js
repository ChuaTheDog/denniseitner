import React from 'react';
import HeaderStyle from './header.module.scss';

const Header = ({ blogtitle, featuredImage }) => {
	const featuredImageBG = featuredImage ? featuredImage : '';

	return (
		<div className={HeaderStyle.header}>
			<img src={featuredImageBG}></img>
			<div className={HeaderStyle.overlay} />
			<h1>{blogtitle}</h1>
		</div>
	);
};

export default Header;
