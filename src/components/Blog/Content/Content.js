import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogContent = ({ body }) => (
    <div className='content'>
        <div className='container'> 
            <MDXRenderer>{body}</MDXRenderer>
        </div>
    </div>
)

export default BlogContent;
