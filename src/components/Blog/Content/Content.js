import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogContent = (props) => {
	return (
		<div>
			<div className='container'>
				<MDXRenderer>{props.body}</MDXRenderer>
			</div>
		</div>
	);
};

export default BlogContent;
