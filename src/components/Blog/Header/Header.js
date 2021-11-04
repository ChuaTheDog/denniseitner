import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const Header = ({ blogtitle, image }) => (
    <div className="footer__header">
        <GatsbyImage image={image} className="footer__header--image" />
        <div className="footer__header--overlay" />
        <h1 className="footer__header--heading">
            {blogtitle}
        </h1>
    </div>
)

export default Header;