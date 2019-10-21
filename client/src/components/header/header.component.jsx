import React, { useEffect } from 'react';
import { LeftNavContainer, RightNavContainer, HeaderContainer } from './header.styles';
import StaticNavList from './static-nav-list.component';
import DynamicNavList from './dynamic-nav-list.component';

const Header = () => {
	useEffect(() => {
		const header = document.querySelector('header');
		const rightNav = document.querySelector('header > #right-nav-container');

		window.addEventListener('scroll', () => {
			const wrappedDiv = document.querySelector('div.switch-wrapper > div');
			const scrollPosition = Math.round(window.scrollY);
			const rightNavHeight = rightNav.offsetHeight;

			if (scrollPosition > rightNavHeight) {
				header.classList.add('fixed');
				wrappedDiv.classList.add('fixed');
			}
			else {
				header.classList.remove('fixed');
				wrappedDiv.classList.remove('fixed');
			}
		});
	});

	return (
		<HeaderContainer>
			<LeftNavContainer>
				<StaticNavList />
			</LeftNavContainer>
			<RightNavContainer id="right-nav-container">
				<DynamicNavList />
			</RightNavContainer>
		</HeaderContainer>
	);
};

export default Header;
