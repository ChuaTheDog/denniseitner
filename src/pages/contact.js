import React from 'react';
import ContactForm from '../components/Form/ContactForm/ContactForm';

import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/SEO';
import ContactBg from '../components/Form/ContactForm/ContactBg';
const Contact = () => {
	return (
		<Layout withHeader={false}>
			<ContactBg />
			<Seo title='Contact' />
			<div className='container'>
				<div className='contactBg'>
					<div className='contactPageContent'>
						<h1>Hello stranger</h1>
						<p>
							Feel free to reach out. Drop my a few lines or follow me on{' '}
							<a
								href='https://www.linkedin.com/in/denniseitner/'
								target='_blank'
								rel='noreferrer noopener'>
								linkedIn
							</a>{' '}
							or{' '}
							<a
								href='https://github.com/ChuaTheDog'
								target='_blank'
								rel='noreferrer noopener'>
								Github
							</a>
							.I'd love to hear from you.
						</p>
						<ContactForm />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
