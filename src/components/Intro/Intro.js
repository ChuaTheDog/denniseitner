import React from 'react';
import { Link } from 'gatsby';

import Button from '../Button/Button';
import Portrait from '../Portrait/Portrait';

const Intro = () => (
    <div className="container">
        <div className="intro">
            <div className="intro__main">
                <h1>
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
            <div className="intro__image">
                <div className="intro__image--portrait">
                    <Portrait />
                </div>
            </div>
        </div>
    </div>
)

export default Intro;
