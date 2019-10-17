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
	@media(min-width: 800px) {
		max-width: 36%;
	}
	animation: rotate-enso 3s linear infinite;
	@keyframes rotate-enso {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
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
