import React from 'react';
import styled from 'styled-components';

const AnswerButton = styled.button`
	border: 2px solid #220f61;
	border-radius: 2.5rem;
	padding: 1rem;
	width: 100%;
	color: #220f61;
	font-family: 'Montserrat Black', sans-serif;
	font-weight: 900; /* black */
	font-size: 1rem;
	background: none;
	margin: 2rem 0;
`;

const QuizButton = (props) => {
	return <AnswerButton>{props.option}</AnswerButton>;
};

export default QuizButton;
