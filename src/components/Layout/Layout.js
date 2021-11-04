import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import MobileNav from '../Nav/MobileNav';
import ScrollButton from '../ScrollButton/ScrollButton';
//import CookieConsent from '../CookieBanner/CookieConsent';
import CookieConsent from 'react-cookie-consent';

import '../../assets/styles/styles.scss';

export default function Layout({ children, withHeader = true }) {

    const [ isOpen, setOpen ] = useState(false);

    const disableScroll = () => {
        // Get the current page scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
      
    const enableScroll = () => {
        window.onscroll = function() {};
    }

    useEffect(() => {
        isOpen ? disableScroll() : enableScroll(); 
    }, [ isOpen ]);

	return (
		<>
			<CookieConsent
				location='bottom'
				buttonText='Accept'
				declineButtonText='Decline'
				cookieName='gatsby-gdpr-google-analytics'>
				This site uses cookies ...
			</CookieConsent>

			<Nav />
			<MobileNav />
	
		<div className="layout">
			<Nav />
			<MobileNav isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
			<Container fluid>
				<main>
				
					{children}
				</main>
			</Container>
			<ScrollButton />
		</div>
	);
}
