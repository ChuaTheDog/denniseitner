import React from 'react';
import styled from 'styled-components';
import QuizButton from './QuizButton';

const QuizWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0%;
	display: flex;
	flex-direction: column;
	background-color: #ffd400;
	h1 {
		color: #220f61;
	}
`;

const Quiz = () => {
	return (
		<QuizWrapper>
			<div className='container mt-3'>
				<h1>How are things running in your company?</h1>
				<QuizButton option={'Awesome'}></QuizButton>
				<QuizButton option={'Awesome'}></QuizButton>
				<QuizButton option={'Awesome'}></QuizButton>
				<QuizButton option={'Awesome'}></QuizButton>
			</div>
		</QuizWrapper>
	);
};

export default Quiz;
