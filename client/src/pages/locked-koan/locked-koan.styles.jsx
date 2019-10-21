import styled from 'styled-components';
import { KoanArticle, KoanP } from '../../components/koan/koan.styles';

const LockedKoanArticle = styled(KoanArticle)`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1, p {
		max-width: 20rem;
		text-align: center;
	}
`;

const KoanButtonContainer = styled.div`
	display: flex;
	justify-content: center;

	button {
		margin: 2rem 0;
		padding: 1rem;
		background-color: #232323;
		color: #dedede;
		transition: background-color 200ms, color 200ms;

		:hover {
			background-color: #454545;
			color: #ffffff;
		}
	}
`;

export { LockedKoanArticle, KoanP, KoanButtonContainer };
