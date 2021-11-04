import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MAXLENGTH = 250;

const Card = ({ post }) => {

    const image = post.frontmatter.featuredImage && getImage(post.frontmatter.featuredImage);

	return (
        <div className="card">
            <div className="card__image">
                <Link to={`/blog/${post.frontmatter.slug}`}>
                    <div className="card__main">
                        <div className="card__date">
                            <div className="card__date--day"></div>
                            <div className="card__date--month"></div>
                        </div>
                        <div className="card__preview">
                            <GatsbyImage image={image} className="img-fluid" alt={post.frontmatter.title} />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card__content">
                <h3>
                    {post.frontmatter.title}
                </h3>
                <p>
                    {post.excerpt.substr(0, MAXLENGTH)}
                </p>
                <Link to={`/blog/${post.frontmatter.slug}`}>read more</Link>
            </div>
        </div>
	);
};

export default Card;