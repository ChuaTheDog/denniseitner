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

    const seo = {
        title: 'Dennis Eitner | Digital Experiences'
    }

	return (
		<Helmet>
            {/* General tags */}
            <title>{title ? title : site.siteMetadata.title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='description' content={description ? description : site.siteMetadata.description} />
            <meta property='og:description' content={description ? description : site.siteMetadata.description} />
            <meta name='title' content={seo.title} />
            <meta property='og:title' content={seo.title} />
            {/* <meta property="og:image" content="" /> */}
            <meta
                name='keywords'
                content='Product Owner, UX, Requirements, User Stories, Frontend, Gatsby, React, Node'
            />
            <meta name='robots' content='index, follow' />
            <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
            <meta name='language' content='English' />
            <meta property="og:locale" content="en_GB" />
            <meta name='author' content='Dennis Eitner' />
        </Helmet>
	);
};

export default SEO;
