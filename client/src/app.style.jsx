import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}
	body {
		font-family: 'Open Sans Condensed', sans-serif;
		margin: 0;
		padding: 0;
		color: #dedede;
		background-color: #232323;
		height: 100%;

		div#root, main, .switch-wrapper {
			height: 100%;
		}
		.switch-wrapper {
			position: relative;
		}
		.switch-wrapper > div {
			position: absolute;
			height: 100%;
			width: 100%;
		}
		header, footer {
			margin: 0;
			padding: 20px 40px;
			@media screen and (max-width: 800px) {
				padding: 10px;
			}
		}
		.switch-wrapper > div {
			margin: 0;
			padding: 1rem;

			@media screen and (min-width: 520px) {
				padding: 1.5rem 2.5rem;
				padding-top: 4rem;
			}
		}
		header {
			position: absolute;
			z-index: 10;
		}
	}
	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
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
