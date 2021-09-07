import React from 'react';
import { Link, graphql } from 'gatsby';
import * as introStyle from './intro.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
const Intro = () => {
	return (
		<Container>
			<div className={introStyle.introWrapper}>
				<Row>
					<Col xs={12} md={8}>
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
							<Link to='/about' className='btn'>
								More about me
							</Link>
						</div>
					</Col>
					<Col
						xs={12}
						md={{ span: 3, offset: 1 }}
						className='d-sm-none d-md-block'>
						<div className={introStyle.portrait}>
							<img
								src={`img/portrait_dennisEitner.png`}
								className='img-fluid'
							/>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Intro;
