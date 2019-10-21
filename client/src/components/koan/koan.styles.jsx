import styled from 'styled-components';

export const KoanArticle = styled.article`
	max-width: 30rem;
	margin: 0 auto 1rem;
	@media (min-width: 600px) {
		margin: 1rem auto 2rem;
	}
	padding: 1rem;
	min-height: 95%;
	background-color: #dedede;
	color: #232323;
`;

export const KoanP = styled.p`
	line-height: 1.7;
	margin-bottom: 2rem;
`;
