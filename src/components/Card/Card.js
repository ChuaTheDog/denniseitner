import React from 'react';
import { Link } from 'gatsby';
import CardStyles from './card.module.scss';

const Card = ({ post }) => {
	return (
		<div className={`grid-item ${CardStyles.card}`}>
			<Link to={`/blog/${post.frontmatter.slug}`} className='cardLink'>
				{!!post.frontmatter.featuredImage ? (
					<img src={post.frontmatter.featuredImage.publicURL} />
				) : null}
				<div className={`cardContent ${CardStyles.cardContent}`}>
					<h1>{post.frontmatter.title}</h1>
					<p className={CardStyles.cardText}>{post.excerpt}</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
