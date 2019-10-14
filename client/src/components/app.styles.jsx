import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		margin: 0;
		padding: 0;
		background-color: ghostwhite;

	header, main, footer {
			margin: 0;
			padding: 20px 40px;
			@media screen and (max-width: 800px) {
				padding: 10px;
			}
	}
	header {
		background-color: white;
	}
}

a {
		text-decoration: none;
		color: black;
}

* {
		box-sizing: border-box;
}
`;

export default GlobalStyle;
