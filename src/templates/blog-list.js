import React from 'react';
import { Link, graphql } from 'gatsby';
import PostCard from '../components/Card/Card';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';
//import Pagination from '../components/Pagination/Pagination';
import BootstrapPagination from 'react-bootstrap/Pagination';
import Pagination from 'react-bootstrap/Pagination';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
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
		<Container className='pt-3 pb-3'>
			<Row>
				<Col>
					<CardColumns>{Posts}</CardColumns>
				</Col>
			</Row>
			<Pagination>
				{!isFirst && (
					<Pagination.Item href={prevPage}> ← Previous Page</Pagination.Item>
				)}

				{Array.from({ length: numPages }, (_, i) => (
					<Pagination.Item
						key={`pagination-number${i + 1}`}
						href={`/blog/${i === 0 ? '' : i + 1}`}>
						{i + 1}
					</Pagination.Item>
				))}

				{!isLast && (
					<Pagination.Item href={nextPage}> Next Page →</Pagination.Item>
				)}
			</Pagination>
		</Container>
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
