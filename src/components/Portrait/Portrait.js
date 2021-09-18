import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
{
    file(relativePath: {eq: "portrait_dennisEitner.png"}) {
        childImageSharp {
            gatsbyImageData(width: 344, height: 344)
          }
    }
  }  
`;

const Portrait = () => {

    const imgQuery = useStaticQuery(query);
    const image = getImage(imgQuery.file);

    return <GatsbyImage image={image} className="img-fluid" alt="portrait" />;
};

export default Portrait;