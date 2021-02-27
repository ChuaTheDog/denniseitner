import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO() {
	return (
		<StaticQuery
			query={graphql`
				{
					site {
						siteMetadata {
							title
							description
							siteUrl
						}
					}
				}
			`}
			render={(data) => (
				<Helmet
					htmlAttributes={{
						lang: 'en',
					}}
					title={data.site.siteMetadata.title}
					meta={[
						{
							name: 'description',
							content: data.site.siteMetadata.description,
						},
					]}
				/>
			)}
		/>
	);
}

export default SEO;
