import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
	{
		file(relativePath: { eq: "zuerich.jpg" }) {
			childImageSharp {
				gatsbyImageData(width: 4096, height: 2219)
			}
		}
	}
`;

const StyledBg = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;
	.backgroundImage {
		opacity: 0.15;
		display: block;
		height: 100%;
		left: 0;
		min-height: 100%;
		min-width: 100%;
		opacity: 0.15;
		position: fixed;
		top: 0;
		width: 100%;
	}
`;

const ContactBg = () => {
	const imgQuery = useStaticQuery(query);
	const image = getImage(imgQuery.file);

	return (
		<StyledBg>
			<GatsbyImage
				image={image}
				className='backgroundImage'
				alt='Map of Zurich'
			/>
		</StyledBg>
	);
};

export default ContactBg;
