import React from 'react';
import contentStyle from './content.module.scss';

const Content = (props) => {
	return (
		<div className={contentStyle.content}>
			<div className='container'>{props.content}</div>
		</div>
	);
};

export default Content;
