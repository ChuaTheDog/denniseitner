import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, title }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	);
	return (
		<div>
			<Helmet>
				{/* General tags */}
				<title>{site.siteMetadata.title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={site.siteMetadata.description} />
			</Helmet>
		</div>
	);
};

export default SEO;
