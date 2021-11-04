import React from 'react';
import { Link } from 'gatsby';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'; 

const Footer = ({ previous, next }) => (
    <div className="container">
        <div className="footer__navigation">
            {previous && (
                <Link to={`/blog${previous.fields.slug}`} className="footer__navigation--btn">
                    <BsArrowLeft />
                </Link>
            )}
            {next && (
                <Link to={`/blog${next.fields.slug}`} className="footer__navigation--btn"> 
                    <BsArrowRight />
                </Link>
            )}
        </div>
    </div>
)

export default Footer;
