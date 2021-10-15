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
				cookieName='gatsby-plugin-gdpr-cookies'
				buttonId='confirm'
				buttonText='Accept'
				declineButtonId='decline'
				declineButtonText='Decline'
				enableDeclineButton={true}
				disableStyles={true}
				onAccept={() => initializeAndTrack(location)}>
				<p className='cookieMessage'>This website uses cookies 🍪 </p>
			</CookieConsent>
		</div>
	);
};

export default CookieBanner;
