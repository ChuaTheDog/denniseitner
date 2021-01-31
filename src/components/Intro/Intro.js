import React from 'react';
import { Link } from 'gatsby';
import IntroStyle from './intro.module.scss';

const Intro = () => {
	return (
		<div className={IntroStyle.introWrapper}>
			<div className={IntroStyle.intro}>
				<h1 className='intro'>
					My name is <span className='yellow'>Dennis</span> and I create digital
					experiences.
				</h1>
				<p>
					I am a &nbsp;
					<b>
						Product Owner/Manager, UX-Designer, Requirements Engineer, and
						Frontend Developer.
					</b>
					&nbsp; In this order. I write feasible User Stories with testable
					acceptance criteria, create flowcharts and wireframes.
				</p>
				<Link to='/about' className='btn'>
					Find out more about me.
				</Link>
			</div>
		</div>
	);
};

export default Intro;
