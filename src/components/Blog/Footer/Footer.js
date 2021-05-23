import React from 'react';
import * as FooterStyle from './footer.module.scss';
import { Link } from 'gatsby';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const Footer = ({ previous, next }) => {
	return (
		<div>
			<div className={FooterStyle.articleFooter}>
				{previous === false ? null : (
					<>
						{previous && (
							<Link
								to={`/blog${previous.fields.slug}`}
								className={`btn  ${FooterStyle.btn}`}>
								<BsArrowLeft></BsArrowLeft>
							</Link>
						)}
					</>
				)}
				{next === false ? null : (
					<>
						{next && (
							<Link
								to={`/blog${next.fields.slug}`}
								className={`btn ${FooterStyle.btn}`}>
								<BsArrowRight></BsArrowRight>
							</Link>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Footer;
