const path = require('path');

module.exports = {
	siteMetadata: {
		title: `Dennis Eitner | Digital experiences`,
		siteUrl: 'https://eitner.ch',
		description: 'I haz website. Much wow.',
	},
	plugins: [
		`gatsby-plugin-preload-fonts`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				implementation: require('node-sass'),
			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-sharp',
		'gatsby-remark-images',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: 'gatsby-remark-embed-youtube',
						options: {
							width: 800,
							height: 400,
						},
					},
				],
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `src`,
				path: `${__dirname}/posts`,
				name: `posts`,
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `images`,
				path: `${__dirname}/static/img`,
			},
			__key: 'pages',
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Dennis Eitner`,
				short_name: `Dennis Eitner`,
				start_url: `/`,
				background_color: `#220F61`,
				theme_color: `#BF1A90`,
				display: `standalone`,
				lang: `en`,
				icon: `src/assets/img/favicon/favicon.png`, // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-react-svg',
		'gatsby-plugin-remove-serviceworker',
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: 'UA-1176332-4', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-analytics', // default
					anonymize: true, // default
					allowAdFeatures: false, // default
				},
			},
			environments: ['production', 'development'],
		},
	],
};
