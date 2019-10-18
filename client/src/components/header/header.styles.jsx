import styled from 'styled-components';

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
`;

const NavContainer = styled.nav`
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	ul {
		display: flex;
		align-items: center;
		list-style-type: none;
		margin: 0;
		padding: 0;
		li {
			a,
			button {
				padding: 0.8rem;
				color: #181818;
			}
		}
	}
`;

export const LeftNavContainer = styled(NavContainer)`
	justify-content: flex-start;
	flex-grow: 1;
	ul {
		padding: 0;
		flex-grow: 1;
		li {
			flex-grow: 1;
		}
	}
`;

export const RightNavContainer = styled(NavContainer)`
	min-width: 30%;
	justify-content: flex-end;
	ul {
		li {
			display: flex;
			justify-content: flex-end;
		}
	}
`;
