import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function Template({
	data,
	pageContext, // this prop will be injected by the GraphQL query below.
}) {
	const { frontmatter, body } = data.mdx;
	const { previous, next } = pageContext;
	console.log(pageContext);
	if (previous === null) {
	}

	return (
		<div>
			{!!frontmatter.featuredImage ? (
				<div
					blogtitle={frontmatter.title}
					featuredImage={frontmatter.featuredImage.publicURL}></div>
			) : null}

			<div body={body}></div>
			{previous === false ? null : (
				<>
					{previous && (
						<Link to={`/blog${previous.fields.slug}`}>
							<p>{previous.frontmatter.title}</p>
						</Link>
					)}
				</>
			)}
			{next === false ? null : (
				<>
					{next && (
						<Link to={`/blog${next.fields.slug}`}>
							<p>{next.frontmatter.title}</p>
						</Link>
					)}
				</>
			)}
		</div>
	);
}
export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				featuredImage {
					id
					publicURL
				}
			}
		}
	}
`;
