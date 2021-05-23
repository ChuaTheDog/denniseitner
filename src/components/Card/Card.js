import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as cardStyles from './card.module.scss';
import { Image } from 'react-bootstrap';
import BootstrapCard from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Masonry from 'react-masonry-css';

const MAXLENGTH = 250;

const Card = ({ post }) => {
	return (
		<Link to={`/blog/${post.frontmatter.slug}`} className={cardStyles.cardLink}>
			<BootstrapCard className={cardStyles.card}>
				{!!post.frontmatter.featuredImage ? (
					<Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
				) : null}
				<BootstrapCard.Body>
					<h3>{post.frontmatter.title}</h3>
					<BootstrapCard.Text>
						{post.excerpt.substr(0, MAXLENGTH)}
					</BootstrapCard.Text>
				</BootstrapCard.Body>
			</BootstrapCard>
		</Link>
	);
};

export default Card;
