import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
	padding: 1rem;
	padding-left: 0;
	display: flex;
	align-items: center;

  @media screen and (max-width: 800px) {
  }
`;

export const NavContainer = styled.nav`
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	ul {
		display: flex;
		align-items: center;
		list-style-type: none;
		margin: 0;
		padding-left: 0;
		li {
			padding: 1rem;
		}
	}

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
