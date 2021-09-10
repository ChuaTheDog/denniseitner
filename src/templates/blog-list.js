import React from 'react';
import { graphql } from 'gatsby';
import PostCard from '../components/Card/Card';
import Pagination from 'react-bootstrap/Pagination';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header/Header';

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
		<>
			<Header></Header>
			<div className='contentWrapper'>
				<Container>
					<Row>
						<Col>
							<div className='pt-3'>{Posts}</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<Pagination>
								{!isFirst && (
									<Pagination.Item href={prevPage}>←</Pagination.Item>
								)}
								{Array.from({ length: numPages }, (_, i) => (
									<Pagination.Item
										key={`pagination-number${i + 1}`}
										href={`/blog/${i === 0 ? '' : i + 1}`}>
										<span> {i + 1}</span>
									</Pagination.Item>
								))}
								{!isLast && (
									<Pagination.Item href={`/blog/${nextPage}`}>
										→
									</Pagination.Item>
								)}
							</Pagination>
						</Col>
					</Row>
				</Container>
			</div>
		</>
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
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
