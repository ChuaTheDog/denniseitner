import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as cardStyles from './card.module.scss';
import Moment from 'react-moment';

const MAXLENGTH = 250;

const Card = ({ post }) => {
	return (
		<div className={cardStyles.cardWrapper}>
			<Link to={`/blog/${post.frontmatter.slug}`}>
				<div className={cardStyles.dateAndPreview}>
					<div className={cardStyles.cardDate}>
						<div className={cardStyles.day}>
							<Moment format='DD'>{post.frontmatter.date}</Moment>
						</div>
						<div className={cardStyles.month}>
							<Moment format='MMM'>{post.frontmatter.date}</Moment>
							&nbsp;
							<Moment format='YY'>{post.frontmatter.date}</Moment>
						</div>
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

			<div className={cardStyles.cardContent}>
				<h3>{post.frontmatter.title}</h3>
				<p>{post.excerpt.substr(0, MAXLENGTH)}</p>
				<Link to={`/blog/${post.frontmatter.slug}`}>read more</Link>
			</div>
		</div>
	);
};

export default Card;
