import React from 'react';
import ContactForm from '../components/Form/ContactForm/ContactForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function Contact() {
	return (
		<div className='container'>
			<div className='contactBg'>
				<div className='contactPageContent'>
					<Row>
						<Col>
							<h1>Contact me</h1>
							<p>
								Feel free to reach out. Drop my a few lines or follow me on
								linkedIn or Github.
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
