import React from 'react';

import Hamburger from 'hamburger-react';
import MobileMenu from './MobileMenu';

const MobileNav = ({ isOpen, setOpen }) => (
	<>
		<div className='hamburger'>
			<Hamburger toggled={isOpen} toggle={setOpen} />
		</div>
		<MobileMenu open={isOpen} />
	</>
);

export default MobileNav;
