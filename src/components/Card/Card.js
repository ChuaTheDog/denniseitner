import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as cardStyles from './card.module.scss';

const MAXLENGTH = 250;

const Card = ({ post }) => {
	return (
		<div className='row'>
			<div className={cardStyles.cardWrapper}>
				<div className='col-md-3 col-lg-2'>
					<Link to={`/blog/${post.frontmatter.slug}`}>
						<div className={cardStyles.dateAndPreview}>
							<div className={cardStyles.cardDate}>
								<div className={cardStyles.day}></div>
								<div className={cardStyles.month}></div>
							</div>
							<div className={cardStyles.previewImage}>
								{!!post.frontmatter.featuredImage ? (
									<Img
										fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
									/>
								) : null}
							</div>
						</div>
					</Link>
				</div>
				<div className='col-md-9 col-lg-10'>
					<div className={cardStyles.cardContent}>
						<h3>{post.frontmatter.title}</h3>
						<p>{post.excerpt.substr(0, MAXLENGTH)}</p>
						<Link to={`/blog/${post.frontmatter.slug}`}>read more</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
