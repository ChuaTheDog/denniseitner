import React from 'react';
import { Link } from 'gatsby';

import Portrait from '../Portrait/Portrait';

import LinkedIn from '../../assets/svg/Linkedin.svg';
import GitHub from '../../assets/svg/Github.svg';

import * as headerStyles from './header.module.scss';

const Header = () => {
	return (
		<div className={headerStyles.header}> 
			<div className="container">
				<div className={headerStyles.headerContainer}>
					<div className={headerStyles.headerImage}>
						<div className={headerStyles.introImage}>
							<Portrait />
						</div>
					</div>
					<div className={headerStyles.headerContent}>
						<div className={headerStyles.introInfo}>
							<h1>Hi, I'm Dennis. </h1>
							<p>
								I am a requirements engineer, product owner/manager, UX designer
								and frontend developer. Preferably but not necessarily in that
								order. For over twenty years I have been developing products and
								services with the greatest passion. No effort too big, no idea
								too daring. You can{' '}
								<Link to='/about'> learn more about me here</Link> if you like.
							</p>
						</div>
						<div className={headerStyles.followMeIcons}>
                            <a href='https://www.linkedin.com/in/denniseitner/' target="_blank" rel="noreferrer noopener" className={headerStyles.followMeLinks}>
                                <LinkedIn />
                            </a>
                            <a href='https://github.com/ChuaTheDog' target="_blank" rel="noreferrer noopener" className={headerStyles.followMeLinks}>
                                <GitHub />
                            </a>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
