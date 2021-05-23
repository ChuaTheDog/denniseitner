import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as contentStyles from './content.module.scss';

const BlogContent = (props) => {
	return (
		<div className='content'>
			<div className={`container `}>
				<MDXRenderer>{props.body}</MDXRenderer>
			</div>
		</div>
	);
};

export default BlogContent;
