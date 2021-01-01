import React from 'react';
import { Link, graphql } from 'gatsby';
import PostCard from '../components/Card/Card';

const blogList = (data) => {
	const { currentPage, numPages } = data.pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage =
		currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();
	const { edges } = data.data.allMdx;

	const Posts = edges
		.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map((edge) => <PostCard key={edge.node.id} post={edge.node} />);

	return (
		<div className='container'>
			<div className='grid-layout'>{Posts}</div>
			<nav
				className='pagination is-centered'
				role='navigation'
				aria-label='pagination'>
				{!isFirst && (
					<Link
						to={prevPage}
						rel='prev'
						className='pagination-previous has-text-white'>
						← Previous Page
					</Link>
				)}
				<ul className='pagination-list'>
					{Array.from({ length: numPages }, (_, i) => (
						<li key={`pagination-number${i + 1}`}>
							<Link
								to={`/blog/${i === 0 ? '' : i + 1}`}
								className='pagination-link has-text-white'>
								{i + 1}
							</Link>
						</li>
					))}
				</ul>
				{!isLast && (
					<Link
						to={nextPage}
						rel='next'
						className='pagination-next has-text-white'>
						Next Page →
					</Link>
				)}
			</nav>
		</div>
	);
};

export default blogList;

export const pageQuery = graphql`
	query blogPageQuery($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					excerpt
					fields {
						slug
					}
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
		}
	}
`;
