import React from 'react';
import * as buttonStyle from './button.module.scss';

const Button = (props) => {
	return (
		<div>
			<button className={`${buttonStyle.button} button`}>
				<span>{props.buttonText}</span>
			</button>
		</div>
	);
};

export default Button;
