import React from 'react';
import Layout from './src/components/Layout/Layout';
import SEO from './src/components/SEO/seo';

require('typeface-pacifico');

export function wrapPageElement({ element, props }) {
	return (
		<Layout {...props}>
			<SEO title='My Amazing Gatsby App' />
			{element}
		</Layout>
	);
}
