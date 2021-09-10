import React from 'react';
import * as headerStyles from './header.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import portraitImage from '../../../static/img/portrait_dennisEitner.png';
import Img from 'gatsby-image';
import LinkedIn from '../../assets/svg/Linkedin.svg';
import GitHub from '../../assets/svg/Github.svg';
import { Link } from 'gatsby';
const Header = (props) => {
	return (
		<div className={headerStyles.header}>
			<Container>
				<Row>
					<Col xs={12} md={4}>
						<div className={headerStyles.introImage}>
							<img src={portraitImage} className='img-fluid' />
						</div>
					</Col>
					<Col xs={12} md={8}>
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
						<Row>
							<Col xs={12}>
								<div className={headerStyles.followMeIcons}>
									<Link
										to='https://www.linkedin.com/in/denniseitner/'
										className={headerStyles.followMeLinks}>
										<LinkedIn></LinkedIn>
									</Link>
									<Link
										to='https://github.com/ChuaTheDog'
										className={headerStyles.followMeLinks}>
										<GitHub></GitHub>
									</Link>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Header;
