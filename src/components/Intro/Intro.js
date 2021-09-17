import React from 'react';
import { Link } from 'gatsby';

import * as introStyle from './intro.module.scss';

import Button from '../Button/Button';
import Portrait from '../Portrait/Portrait';

const Intro = () => {

	return (
		<div className="container">
			<div className={introStyle.introWrapper}>
                <div className={introStyle.introMain}>
                    <div className={introStyle.intro}>
                        <h1 className='intro'>
                            My name is <span className='yellow'>Dennis</span> and I create
                            digital experiences.
                        </h1>
                        <p>
                            I am a &nbsp;
                            <b>
                                Product Owner/Manager, UX-Designer, Requirements Engineer, and
                                Frontend Developer.
                            </b>
                            &nbsp; In this order. I write feasible User Stories with
                            testable acceptance criteria, create flowcharts and wireframes.
                        </p>
                        <Link to='/about'>
                            <Button buttonText='More about me'>More about me</Button>
                        </Link>
                    </div>
                </div>
                <div className={introStyle.introImage}>
                    <div className={introStyle.portrait}>
                        <Portrait />
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Intro;
