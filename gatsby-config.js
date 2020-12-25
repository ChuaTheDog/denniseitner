const path = require('path');

module.exports = {
	siteMetadata: {
		title: `Dennis Eitner`,
		siteUrl: 'https://denniseitner.ch',
		description: 'Livin la vida loca',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},

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
	],
};
