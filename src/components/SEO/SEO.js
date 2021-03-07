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
				<meta name='title' content='Dennis Eitner | Digital Experiences' />
				<meta
					name='keywords'
					content='Product Owner, UX, Requirements, User Stories, Frontend, Gatsby, React, Node'
				/>
				<meta name='robots' content='index, follow' />
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<meta name='language' content='English' />
				<meta name='author' content='Dennis Eitner' />
				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='/src/images/favicon/apple-icon-57x57.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='/src/images/favicon/apple-icon-60x60.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='/src/images/favicon/apple-icon-72x72.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='/src/images/favicon/apple-icon-76x76.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='/src/images/favicon/apple-icon-114x114.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='/src/images/favicon/apple-icon-120x120.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='/src/images/favicon/apple-icon-144x144.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='/src/images/favicon/apple-icon-152x152.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/src/images/favicon/apple-icon-180x180.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/src/images/favicon/android-icon-192x192.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/src/images/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/src/images/favicon/favicon-96x96.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/src/images/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/src/images/favicon/manifest.json' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta
					name='msapplication-TileImage'
					content='/src/images/favicon/ms-icon-144x144.png'
				/>
			</Helmet>
		</div>
	);
};

export default SEO;
