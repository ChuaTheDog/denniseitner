import React from 'react';
import { Link, graphql } from 'gatsby';
import * as introStyle from './intro.module.scss';
import Img from 'gatsby-image';
const Intro = () => {
	return (
		<div className={introStyle.introWrapper}>
			<div className={introStyle.intro}>
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
					More about me
				</Link>
			</div>
			<div className={introStyle.portrait}>
				<img src={`img/portrait_dennisEitner.png`} />
			</div>
		</div>
	);
};

export default Intro;
