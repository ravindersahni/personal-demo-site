import styled from 'styled-components';

export const KoanUL = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 0;
	padding: 0;

	li {
		display: flex;
		margin: 1rem;
		flex-basis: 60%;
		@media (min-width: 600px) {
			flex-basis: 25%;
		}
		min-height: 12rem;
		justify-content: center;
	}
`;
