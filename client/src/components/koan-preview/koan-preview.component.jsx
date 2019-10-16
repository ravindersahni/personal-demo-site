import React from 'react';
import styled from 'styled-components';

const FlexArticle = styled.article`display: flex;`;

const KoanPreview = ({ koan }) => (
	<FlexArticle>
		<h1>{koan.title}</h1>
	</FlexArticle>
);

export default KoanPreview;
