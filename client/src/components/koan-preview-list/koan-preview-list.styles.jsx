import styled from 'styled-components';

export const KoanUL = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 0;
	padding: 5rem 0;

	li {
		display: flex;
		margin: 1rem;
		flex-basis: 100%;
		@media (min-width: 800px) {
			flex-basis: 20%;
		}
		min-height: 12rem;
		justify-content: center;

		article {
			width: 100%;
			border-radius: 100%;
			padding: 0;
			background-color: #dedede;
			color: #232323;

			h1 {
				width: 100%;
				margin: 0;
				padding: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
			}
		}
	}
`;
