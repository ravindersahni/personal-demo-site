import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	padding: 0 1rem;
	display: flex;
	flex-direction: column-reverse;
	position: static;
	justify-content: space-between;
	align-items: center;
	color: #181818;
	background-color: #dedede;
	box-shadow: 1px 1px 3px #232323;

	&.fixed {
		@media (max-width: 519px) {
			position: fixed;
			margin-top: -3rem;
		}
	}

	@media (min-width: 520px) {
		flex-direction: row;
		position: fixed;
		margin-top: 0;
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
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;

		@media (min-width: 520px) {
			flex-wrap: nowrap;
		}
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
		padding: 0;
		flex-grow: 1;
		margin: 0 -0.8rem;
		justify-content: space-around;
		width: 100%;

		li {
			display: flex;
			justify-content: space-between;
		}
		@media (min-width: 520px) {
			justify-content: flex-end;
			margin: 0;
		}
	}
`;
