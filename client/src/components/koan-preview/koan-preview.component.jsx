import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexArticle = styled.article`display: flex;`;
const FlexLink = styled(Link)`display: flex; width: 100%`;

const KoanPreview = ({ koan }) => (
	<FlexLink to={`/koans/${koan._id}`}>
		<FlexArticle>
			<h1>{koan.title}</h1>
		</FlexArticle>
	</FlexLink>
);

export default KoanPreview;
