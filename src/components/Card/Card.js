import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import CardStyles from './card.module.scss';
import { Image } from 'react-bootstrap';
import BootstrapCard from 'react-bootstrap/Card';
const MAXLENGTH = 250;

const Card = ({ post }) => {
	return (
		<Link to={`/blog/${post.frontmatter.slug}`} className={CardStyles.cardLink}>
			<BootstrapCard className={CardStyles.card}>
				{!!post.frontmatter.featuredImage ? (
					<Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
				) : null}
				<BootstrapCard.Body>
					<h3>
						<BootstrapCard.Title>{post.frontmatter.title}</BootstrapCard.Title>
					</h3>
					<BootstrapCard.Text>
						{post.excerpt.substr(0, MAXLENGTH)}
					</BootstrapCard.Text>
				</BootstrapCard.Body>
			</BootstrapCard>
		</Link>
	);
};

export default Card;
