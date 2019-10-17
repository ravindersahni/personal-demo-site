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
		flex-basis: 60%;
		@media (min-width: 600px) {
			flex-basis: 25%;
		}
		min-height: 12rem;
		justify-content: center;

		article {
			justify-content: center;
			width: 100%;
			border-radius: 100%;
			padding: 0;
			background-color: #dedede;
			color: #232323;
			transition: background-color 0.5s, color 0.5s;
			cursor: pointer;

			:hover {
				background-color: darkred;
				color: ghostwhite;
			}

			::before {
				content: '';
				display: block;
				padding-top: 100%;
			}

			h1 {
				width: 100%;
				max-width: 300px;
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
