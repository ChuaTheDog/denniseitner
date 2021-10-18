import React from 'react';

import { Container } from 'react-bootstrap';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import MobileNav from '../Nav/MobileNav';
import ScrollButton from '../ScrollButton/ScrollButton';
//import CookieConsent from '../CookieBanner/CookieConsent';
import CookieConsent from 'react-cookie-consent';

import '../../assets/styles/styles.scss';

export default function Layout({ children, withHeader = true }) {
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
	
			<Container fluid>
				<main>
				
					{children}
				</main>
			</Container>
			<ScrollButton />
		</>
	);
}
