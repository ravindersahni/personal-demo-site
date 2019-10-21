import React from 'react';
import { LeftNavContainer, RightNavContainer, HeaderContainer } from './header.styles';
import StaticNavList from './static-nav-list.component';
import DynamicNavList from './dynamic-nav-list.component';

const Header = () => (
	<HeaderContainer>
		<LeftNavContainer>
			<StaticNavList />
		</LeftNavContainer>
		<RightNavContainer>
			<DynamicNavList />
		</RightNavContainer>
	</HeaderContainer>
);

export default Header;
