import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import BlogHeader from '../components/Blog/Header/Header';
import Content from '../components/Blog/Content/Content';
import Header from '../components/Header/Header';
import ArticleFooter from '../components/Blog/Footer/Footer';

export default function Template({
	data,
	pageContext, // this prop will be injected by the GraphQL query below.
}) {
	const { frontmatter, body } = data.mdx;
	const { previous, next } = pageContext;
	if (previous === null) {
	}

	return (
		<div>
			{frontmatter.featuredImage ? (
				<BlogHeader
					blogtitle={frontmatter.title}
					featuredImage={frontmatter.featuredImage.publicURL}></BlogHeader>
			) : (
				<Header title={frontmatter.title}></Header>
			)}
			<div className='contentWrapper'>
				<Content body={body}></Content>
				<ArticleFooter previous={previous} next={next}></ArticleFooter>
			</div>
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
