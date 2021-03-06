const path = require('path');

module.exports = {
	siteMetadata: {
		title: `Dennis Eitner | Digital experiences`,
		siteUrl: 'https://eitner.ch',
		description: 'I haz website. Much wow.',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-preload-fonts',
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
				],
			},
		},
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
			resolve: `gatsby-plugin-preload-fonts`,
		},
	],
};
