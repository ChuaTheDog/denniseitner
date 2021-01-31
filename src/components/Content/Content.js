import React from 'react';
import contentStyle from './content.module.scss';

const Content = (props) => {
	return (
		<div className={contentStyle.content} id='content'>
			<div className='container'>
				<div className='columns'>
					<div className='column is-half is-offset-one-quarter'>
						{props.content}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
