import React from 'react';
import * as FooterStyle from './footer.module.scss';
import { Link } from 'gatsby';
import { FaArrowCircleRight, FaArrowCircleLeft  } from 'react-icons/fa';
const Footer = ({ previous, next }) => {
	return (
		<div className="container">
			<div className={FooterStyle.articleFooter}>
                {previous && (
                    <Link to={`/blog${previous.fields.slug}`}>
                          <FaArrowCircleLeft /> 
                    </Link>
                )}
				{next && (
                    <Link to={`/blog${next.fields.slug}`}>
                       <FaArrowCircleRight /> 
                    </Link>
                )}
			</div>
		</div>
	);
};

export default Footer;
