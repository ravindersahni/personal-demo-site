import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Enso } from '../../assets/images/enso.svg';

const StyledArticle = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const StyledEnso = styled(Enso)`
	max-width: 50%;
	height: auto;

	@media(min-width: 800px) {
		max-width: 36%;
	}
	animation: spin-enso 3s linear infinite;

	@keyframes spin-enso {
		0% {
			opacity: 0.5;
			transform: rotate(0);
		}
		50% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.4;
			transform: rotate(360deg);
		}
	}
	g {
		transition: fill 2s ease-in-out;
	}
	:hover {
		g {
			fill: black;
		}
	}
`;

const EnsoArticle = ({ children }) => (
	<StyledArticle>
		{children}
		<StyledEnso />
	</StyledArticle>
);

export default EnsoArticle;
