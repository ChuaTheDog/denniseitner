import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import * as scrollButtonStyles from './scrollButton.module.scss';

const ScrollButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = () => {
		console.log('scroll');
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);
	return (
		<div>
			<div className='scroll-to-top'>
				{isVisible && (
					<button
						className={scrollButtonStyles.scrollButton}
						onClick={scrollToTop}>
						<FaArrowCircleUp className={scrollButtonStyles.upIcon} />
					</button>
				)}
			</div>
		</div>
	);
};

export default ScrollButton;
