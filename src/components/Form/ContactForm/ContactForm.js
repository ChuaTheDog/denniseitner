/*
TODO: 
- remove form after submission
- prevent multiple submission
- add honeypot
*/

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as contactFormStyles from './contactForm.module.scss';
import * as Yup from 'yup';

import Button from '../../Button/Button';
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
		onSubmit: async (values, error) => {
			console.log(error);
			setLoading(true);
			await sleep(500);
			const { name, email, message } = values;
			await fetch(
				`${process.env.GATSBY_SERVERLESS_BASE}/contactForm/contactForm`,
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({ name, email, message }),
				}
			);

			setformSuccess(true);
			setLoading(false);
		},
	});

	return (
		<div>
			<div>
				{formSuccess ? (
					<p className={`${contactFormStyles.confirmation}`}>
						Thank you, <span>{formik.values.name}</span>. I'll do my best to
						answer as quick as I can.
					</p>
				) : (
					<form onSubmit={formik.handleSubmit}>
						<p className={`${contactFormStyles.hidden}`}>
							<label>
								Don’t fill this out if you’re human: <input name='bot-field' />
							</label>
						</p>
						<div className={`form-group ${contactFormStyles.customFormGroup}`}>
							<label htmlFor='name'>Name:</label>
							<input
								id='name'
								name='name'
								type='text'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
								className={`form-control ${
									formik.touched.email && formik.errors.email
										? contactFormStyles.error
										: ''
								}`}
							/>
							<div
								className={`error-message help yellow ${contactFormStyles.feedback}`}>
								{formik.touched.name &&
									formik.errors.name &&
									formik.errors.name}
							</div>
						</div>
						<div className={`form-group ${contactFormStyles.customFormGroup}`}>
							<label htmlFor='email'>Email*</label>
							<input
								id='email'
								name='email'
								type='email'
								className={`form-control ${
									formik.touched.email &&
									formik.errors.email &&
									contactFormStyles.error
								}`}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							<div
								className={`error-message help yellow ${contactFormStyles.feedback}`}>
								&nbsp;
								{formik.touched.email &&
									formik.errors.email &&
									formik.errors.email}
							</div>
						</div>
						<div className={`form-group ${contactFormStyles.customFormGroup}`}>
							<div className={`field ${contactFormStyles.field}`}>
								<label htmlFor='message'>Message*</label>
								<div className='control'>
									<textarea
										name='message'
										id='message'
										cols='30'
										rows='10'
										className='form-control'
										//className={`textarea is-rounded ${contactFormStyles.textarea}`}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.message}></textarea>
								</div>
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
								<Button type='submit' buttonText='Send' />
							)}
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
