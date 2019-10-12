import React from 'react';

const Header = props => {
	let blah;

	return (
		<header>
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo center">
						Emaily
					</a>
					<ul id="nav-mobile" className="right">
						<li>
							<a href="sass.html">Log In with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
