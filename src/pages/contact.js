import React from 'react';
import ContactForm from '../components/Form/ContactForm/ContactForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'gatsby';

export default function Contact() {
	return (
		<div className='container'>
			<div className='contactBg'>
				<div className='contactPageContent'>
					<Row>
						<Col>
							<h1>Hello stranger</h1>
							<p>
								Feel free to reach out. Drop my a few lines or follow me on{' '}
								<Link to='https://www.linkedin.com/in/denniseitner/'>
									linkedIn
								</Link>{' '}
								or <Link to='https://github.com/ChuaTheDog'>Github</Link>.I'd
								love to hear from you.
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<ContactForm></ContactForm>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}
