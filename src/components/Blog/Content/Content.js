import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogContent = (props) => {
	return (
		<div className='content'>
			<div className='container'>
				<MDXRenderer>{props.body}</MDXRenderer>
			</div>
		</div>
	);
};

export default BlogContent;
