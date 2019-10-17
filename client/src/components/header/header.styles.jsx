import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
	width: 100%;
	padding: 0 1rem;
	display: flex;
	position: fixed;
	justify-content: space-between;
	align-items: center;
	color: #181818;
	background-color: #dedede;
	box-shadow: 1px 1px 3px #232323;

	@media screen and (max-width: 800px) {
	}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
	display: flex;
	align-items: center;
	padding: 0.8rem;

	ul {
		display: flex;
		align-items: center;
		list-style-type: none;
		margin: 0;
		li {
			a,
			button {
				padding: 0.8rem;
			}
		}
	}
  @media screen and (max-width: 800px) {
  }
`;

export const RightNavContainer = styled.nav`
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
		li {
			a,
			button {
				padding: 0.8rem;
			}
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
