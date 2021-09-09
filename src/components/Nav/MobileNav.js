import React, { useState } from 'react';
import * as mobileNav from './mobileNav.module.scss';
import Hamburger from 'hamburger-react';
import MobileMenu from './MobileMenu';
const MobileNav = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<div className={mobileNav.hamburgerIcon}>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>
			<MobileMenu open={isOpen} />
		</>
	);
};

export default MobileNav;
