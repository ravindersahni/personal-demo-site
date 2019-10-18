import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	padding: 0 1rem;
	display: flex;
	flex-direction: column-reverse;
	position: fixed;
	justify-content: space-between;
	align-items: center;
	color: #181818;
	background-color: #dedede;
	box-shadow: 1px 1px 3px #232323;

	@media (min-width: 520px) {
		flex-direction: row;
	}
`;

const NavContainer = styled.nav`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;
		li {
			display: flex;
			justify-content: center;
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
		margin: 0 -0.8rem;
		li {
			flex-grow: 1;
		}
		@media (min-width: 520px) {
			margin: 0;
		}
	}
`;

export const RightNavContainer = styled(NavContainer)`
	min-width: 30%;
	justify-content: space-between;
	ul {
		li {
			display: flex;
			justify-content: space-between;
		}
		justify-content: space-between;
		width: 100%;
		@media (min-width: 520px) {
			justify-content: flex-end;
			margin: 0;
		}
	}
`;
