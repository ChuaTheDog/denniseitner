import React from 'react';
import FooterStyle from './footer.module.scss';
import { Link } from 'gatsby';

const Footer = ({ previous, next }) => {
	return (
		<div className='container'>
			<div className={FooterStyle.articleFooter}>
				{previous === false ? null : (
					<>
						{previous && (
							<Link
								to={`/blog${previous.fields.slug}`}
								className={`btn ${FooterStyle.btn}`}>
								{previous.frontmatter.title}
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
								{next.frontmatter.title}
							</Link>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Footer;
