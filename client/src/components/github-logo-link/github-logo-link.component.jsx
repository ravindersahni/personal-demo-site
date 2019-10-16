import React from 'react';
import { ReactComponent as GithubLogo } from '../../assets/images/github.svg';

const GithubLogoLink = () => (
	<a
		href="https://github.com/ravindersahni/personal-demo-site"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Link to Github source of this site"
	>
		<GithubLogo style={{ verticalAlign: 'middle' }} />
	</a>
);

export default GithubLogoLink;
