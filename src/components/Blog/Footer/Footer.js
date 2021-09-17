import React from 'react';
import * as FooterStyle from './footer.module.scss';
import { Link } from 'gatsby';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const Footer = ({ previous, next }) => {
	return (
		<div className="container">
			<div className={FooterStyle.articleFooter}>
                {previous && (
                    <Link to={`/blog${previous.fields.slug}`} className={`btn  ${FooterStyle.btn}`}>
                        <BsArrowLeft />
                    </Link>
                )}
				{next && (
                    <Link to={`/blog${next.fields.slug}`} className={`btn ${FooterStyle.btn}`}>
                        <BsArrowRight />
                    </Link>
                )}
			</div>
		</div>
	);
};

export default Footer;
