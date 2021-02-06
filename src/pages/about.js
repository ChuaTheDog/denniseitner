import React from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

const AboutPage = () => (
	<main>
		<Header title={'Hello World'}></Header>
		<div className=''>
			<div className='container'>
				<h2>Hello World. </h2>
				<p>
					I create wireframes and prototypes to illustrate the user stories so
					that they can be tested before implementation. In regular kickoffs and
					walkthroughs before sprints, I engage in agile work processes to
					create a shared understanding of development goals across teams. This
					results in progressive product development.
				</p>
				<p>
					My daily tasks include the development of data models, UML, flow maps,
					sitemaps, mockups, design templates, information architecture,
					interaction and user interface design, testing, user stories. I also
					regularly interact with business stakeholders and manage the backlog.{' '}
				</p>

				<p>
					My passion is the realization of ideas and concepts. I have a strong
					entrepreneurial and commercial mindset. Through my education and
					training, I cover a wide range of disciplines in the development of
					digital products. This enables me to quickly understand complex
					technical issues. I emphasize optimally combining form and function to
					create an exceptional and lasting experience for the end-user.
				</p>
			</div>
		</div>
	</main>
);

export default AboutPage;
