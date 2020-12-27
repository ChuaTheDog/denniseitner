import React from 'react';
import { Link } from 'gatsby';
import CardStyles from './card.module.scss';

const Card = ({ post }) => {
	console.log('card component rendered');
	return (
		<div className={`grid-item {CardStyles.card}`}>
			<Link to={`/blog/${post.frontmatter.slug}`} className='cardLink'>
				{!!post.frontmatter.featuredImage ? (
					<img src={post.frontmatter.featuredImage.publicURL} />
				) : null}
				<div className='cardContent'>
					<h1>{post.frontmatter.title}</h1>
					<p className='cardText'>{post.frontmatter.excerpt}</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
