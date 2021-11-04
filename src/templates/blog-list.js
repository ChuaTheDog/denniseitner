import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/SEO';
import Header from '../components/Header/Header';
import PostCard from '../components/Card/Card';

const PaginationItem = ({ children, to }) => (
	<li className='page-item'>
		<Link className='page-link' to={to}>
			<span>{children}</span>
		</Link>
	</li>
);

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
		<Layout>
			<Seo title='Blog' />
			<Header />
			<div className='contentWrapper'>
				<div className='container'>
					<div className='pt-3'>{Posts}</div>
					<ul className='pagination'>
						{!isFirst && (
							<PaginationItem to={prevPage}>
								<span>←</span>
							</PaginationItem>
						)}
						{Array.from({ length: numPages }, (_, i) => (
							<PaginationItem key={i} to={`/blog/${i === 0 ? '' : i + 1}`}>
								<span>{i + 1}</span>
							</PaginationItem>
						))}
						{!isLast && (
							<PaginationItem to={`/blog/${nextPage}`}>
								<span>→</span>
							</PaginationItem>
						)}
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default blogList;

export const pageQuery = graphql`
	query blogPageQuery($skip: Int!, $limit: Int!) {
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
							childImageSharp {
								gatsbyImageData(height: 250)
							}
						}
					}
				}
			}
		}
	}
`;
