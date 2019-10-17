import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GithubLogo } from '../../assets/images/github.svg';

const StyledA = styled.a`
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0.8rem;

	svg {
		height: 1.1rem;
		padding-top: 1px;
	}
`;

const GithubLogoLink = () => (
	<StyledA
		href="https://github.com/ravindersahni/personal-demo-site"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Link to Github source of this site"
	>
		<GithubLogo />
	</StyledA>
);

export default GithubLogoLink;
