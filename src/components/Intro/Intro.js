import React from 'react';
import IntroStyle from './intro.module.scss';

const Intro = () => {
	return (
		<div className={IntroStyle.intro}>
			<div className='container'>
				<h1 className='intro'>
					My Name is <span className='yellow'>Dennis</span> and I create digital
					experiances.
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
					mollitia aperiam beatae iste similique impedit, fugit suscipit iure,
					laboriosam iusto magnam eius excepturi dignissimos omnis quidem, eaque
					itaque consequatur qui!
				</p>
			</div>
		</div>
	);
};

export default Intro;
