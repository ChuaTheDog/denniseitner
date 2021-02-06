import React, { useState } from 'react';

import ContactForm from '../components/Form/ContactForm/ContactForm';

export default function Contact() {
	return (
		<div>
			<ContactForm></ContactForm>
			<h1>Contact me</h1>
			<p>
				Feel free to reach out. Drop my a few lines or follow me on linkedIn or
				Github.
			</p>
		</div>
	);
}
