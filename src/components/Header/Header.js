import React from 'react';
import { Link } from 'gatsby';

import Portrait from '../Portrait/Portrait';

import LinkedIn from '../../assets/svg/Linkedin.svg';
import GitHub from '../../assets/svg/Github.svg';

const Header = () => (
    <div className="header"> 
        <div className="container">
            <div className="header__container">
                <div className="header__image">
                    <Portrait />
                </div>
                <div className="header__content">
                    <h1>Hi, I'm Dennis. </h1>
                    <p>
                        I am a requirements engineer, product owner/manager, UX designer
                        and frontend developer. Preferably but not necessarily in that
                        order. For over twenty years I have been developing products and
                        services with the greatest passion. No effort too big, no idea
                        too daring. You can{' '}
                        <Link to='/about'> learn more about me here</Link> if you like.
                    </p>
                    <div className="header__links">
                        <a href='https://www.linkedin.com/in/denniseitner/' target="_blank" rel="noreferrer noopener">
                            <LinkedIn />
                        </a>
                        <a href='https://github.com/ChuaTheDog' target="_blank" rel="noreferrer noopener">
                            <GitHub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Header;
