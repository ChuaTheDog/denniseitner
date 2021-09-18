import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import * as HeaderStyle from './header.module.scss';

const Header = ({ blogtitle, image }) => {

	return (
		<div className={HeaderStyle.header}>
            <GatsbyImage image={image} className={HeaderStyle.Image} />
			<div className={HeaderStyle.overlay} />
			<h1>{blogtitle}</h1>
		</div>
	);
};

export default Header;
