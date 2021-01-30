/*
TODO: 
- Include this in contact form
- remove form after submission
- prevent multiple submission
- add honeypot
*/

import React, { useState } from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import contactFormStyles from './contactForm.module.scss';
import * as Yup from 'yup';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Button from '../../Button/Button';
import loadingGif from '../../../assets/img/loading.gif';
import ReactLoading from 'react-loading';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ContactForm = () => {
	const [formSuccess, setformSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(25, 'Must be 15 characters or less')
				.required('Please indicate a name'),
			email: Yup.string()
				.email('Invalid email address')
				.required('Please indicate a valid email'),
			botField: Yup.string().max(1, 'you are not supposed to fikk this out'),
		}),
		onSubmit: async (values, e) => {
			setLoading(true);
			await sleep(500);
			const { name, email, message } = values;
			const response = await fetch(
				`${process.env.GATSBY_SERVERLESS_BASE}/contactForm/contactForm`,
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({ name, email, message }),
				}
			);
			//alert(JSON.stringify(values, null, 2));

			setformSuccess(true);
			setLoading(false);
		},
	});

	return (
		<div>
			<div className='container'>
				{formSuccess ? (
					<p className={`${contactFormStyles.confirmation}`}>
						Thank you, <span>{formik.values.name}</span>. I'll do my best to
						answer as quick as I can.
					</p>
				) : (
					<form onSubmit={formik.handleSubmit}>
						<p className='is-hidden'>
							<label>
								Don’t fill this out if you’re human: <input name='bot-field' />
							</label>
						</p>
						<div className={`field ${contactFormStyles.field}`}>
							<label htmlFor='Name'>Name*</label>
							<input
								id='name'
								name='name'
								type='text'
								className='input is-rounded'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
							/>
							<p className={`help yellow ${contactFormStyles.feedback}`}>
								&nbsp;
								{formik.touched.name && formik.errors.name
									? formik.errors.name
									: null}
							</p>
						</div>{' '}
						<div className={`field ${contactFormStyles.field}`}>
							<label htmlFor='email'>Email*</label>
							<input
								id='email'
								name='email'
								type='email'
								className='input is-rounded'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							<p className={`help yellow ${contactFormStyles.feedback}`}>
								&nbsp;
								{formik.touched.email && formik.errors.email
									? formik.errors.email
									: null}
							</p>
						</div>
						<div className={`field ${contactFormStyles.field}`}>
							<label>Message*</label>
							<div className='control'>
								<textarea
									name='message'
									id=''
									cols='30'
									rows='10'
									className={`textarea is-rounded ${contactFormStyles.textarea}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.message}></textarea>
							</div>
						</div>
						<div className={`field ${contactFormStyles.buttonMargin}`}>
							{loading ? (
								<ReactLoading
									type={'bubbles'}
									color={'#fff'}
									height={50}
									width={50}
								/>
							) : (
								<Button type='submit'></Button>
							)}
						</div>
					</form>
				)}
				<GoogleReCaptchaProvider
					reCaptchaKey={process.env.GOOGLE_RECAPTCHA_KEY}
					useRecaptchaNet='[optional_boolean_value]'></GoogleReCaptchaProvider>
			</div>
		</div>
	);
};

export default ContactForm;
