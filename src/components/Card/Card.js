import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as cardStyles from './card.module.scss';

const MAXLENGTH = 250;

const Card = ({ post }) => {

    const image = post.frontmatter.featuredImage && getImage(post.frontmatter.featuredImage);

	return (
        <div className={cardStyles.cardWrapper}>
            <div className={cardStyles.cardImage}>
                <Link to={`/blog/${post.frontmatter.slug}`}>
                    <div className={cardStyles.dateAndPreview}>
                        <div className={cardStyles.cardDate}>
                            <div className={cardStyles.day}></div>
                            <div className={cardStyles.month}></div>
                        </div>
                        <div className={cardStyles.previewImage}>
                            <GatsbyImage image={image} className="img-fluid" alt={post.frontmatter.title} />
                        </div>
                    </div>
                </Link>
            </div>
            <div className={cardStyles.cardContent}>
                <div className={cardStyles.cardContent}>
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.excerpt.substr(0, MAXLENGTH)}</p>
                    <Link to={`/blog/${post.frontmatter.slug}`}>read more</Link>
                </div>
            </div>
        </div>
	);
};

export default Card;
