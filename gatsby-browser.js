import React from 'react';
import Layout from './src/components/Layout';
require('typeface-pacifico');

export function wrapPageElement({ element, props }) {
	return <Layout {...props}>{element}</Layout>;
}
