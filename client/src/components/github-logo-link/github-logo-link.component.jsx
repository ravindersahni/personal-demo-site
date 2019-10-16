import React from 'react';
import { ReactComponent as GithubLogo } from '../../assets/images/github.svg';

const GithubLogoLink = () => (
	<a href="https://github.com/ravindersahni/personal-demo-site">
		<span style={{ visibility: 'hidden' }}>Github</span>
		<GithubLogo style={{ verticalAlign: 'middle' }} />
	</a>
);

export default GithubLogoLink;
