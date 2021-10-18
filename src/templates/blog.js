import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";
import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/SEO';
import BlogHeader from '../components/Blog/Header/Header';
import Content from '../components/Blog/Content/Content';
import ArticleFooter from '../components/Blog/Footer/Footer';

const Template = ({ data, pageContext }) => { // this prop will be injected by the GraphQL query below.
	const { frontmatter, body } = data.mdx;
    const { title, featuredImage } = frontmatter;
	const { previous, next } = pageContext;

    const image = featuredImage && getImage(featuredImage);

	return (
		<Layout>
			<Seo title={title} />
            <BlogHeader blogtitle={title} image={image} />
			<div className='contentWrapper'>
				<Content body={body} />
				<ArticleFooter previous={previous} next={next} />
			</div>
		</Layout>
	);
}

export default Template;

export const pageQuery = graphql`
	query ($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				featuredImage {
					childImageSharp {
                        gatsbyImageData
                    }
				}
			}
		}
	}
`;
