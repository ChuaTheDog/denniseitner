import React from 'react';
import { useLocation } from '@reach/router'; // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
	const location = useLocation();
	initializeAndTrack(location);
	return (
		<div>
			<CookieConsent
				location='bottom'
				buttonText='Sure man!!'
				cookieName='gatsby-plugin-gdpr-cookies'
				style={{ background: '#2B373B' }}
				buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
				expires={150}>
				This website uses cookies to enhance the user experience.{' '}
				<span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span>
			</CookieConsent>
		</div>
	);
};

export default CookieBanner;
