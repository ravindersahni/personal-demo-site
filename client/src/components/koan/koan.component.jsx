import React from 'react';
import styled from 'styled-components';

const KoanArticle = styled.article`
	max-width: 30rem;
	margin: 0 auto;
	@media (min-width: 600px) {
		margin: 1rem auto;
	}
	padding: 1rem;
	min-height: 95%;
	background-color: #dedede;
	color: #232323;
`;

const KoanP = styled.p`
	line-height: 1.7;
	margin-bottom: 2rem;
`;

const Koan = ({ koan }) => (
	<KoanArticle>
		<h1>{koan.title}</h1>
		{koan.body.map((p, i) => <KoanP key={i}>{p}</KoanP>)}
	</KoanArticle>
);

export default Koan;
