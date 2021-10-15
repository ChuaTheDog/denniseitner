import React from 'react';
import { useLocation } from '@reach/router'; // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import CookieConsent from "react-cookie-consent"

const CookieBanner = () => {
	function isBrowser() {
		return typeof window !== 'undefined';
	  }
	  
	  function getValue(key, defaultValue) {
		return isBrowser() && window.localStorage.getItem(key)
		  ? JSON.parse(window.localStorage.getItem(key))
		  : defaultValue;
	  }
	  
	  function setValue(key, value) {
		window.localStorage.setItem(key, JSON.stringify(value));
	  }
	  
	  function useStickyState(defaultValue, key) {
		const [value, setter] = React.useState(() => {
		  return getValue(key, defaultValue);
		});
	  
		React.useEffect(() => {
		  setValue(key, value);
		}, [key, value]);
	  
		return [value, setter];
	  }
	  
	  const CookieConsent = () => {
		const location = useLocation();
		if (isBrowser()) {
		  initializeAndTrack(location);
		}
	  
		const [bannerHidden, setBannerHidden] = useStickyState(
		  false,
		  'consentCookieHidden',
		);
	  
		const EnableAnalytics = () => {
		  document.cookie = 'gatsby-gdpr-google-analytics=true';
		  setBannerHidden(true);
		};
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
				onAccept={EnableAnalytics}>
				<p className='cookieMessage'>This website uses cookies 🍪 </p>
			</CookieConsent>
		</div>
	);
};

export default CookieBanner;
