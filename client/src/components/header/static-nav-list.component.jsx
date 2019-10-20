import React from 'react';
import { Link } from 'react-router-dom';
import GithubLogoLink from '../github-logo-link/github-logo-link.component';

const StaticNavList = () => (
	<ul>
		<li>
			<Link to="/">RS</Link>
		</li>
		<li>
			<Link to="/koans">Koans</Link>
		</li>
		<li>
			<Link to="/weather">Weather</Link>
		</li>
		<li>
			<Link to="/games">Games</Link>
		</li>
		<li>
			<GithubLogoLink />
		</li>
		<li>
			<Link to="/about">Throw</Link>
		</li>
	</ul>
);

export default StaticNavList;
