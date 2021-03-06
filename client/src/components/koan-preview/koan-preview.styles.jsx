import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LockIcon } from '../../assets/images/lock.svg';

export const StyledArticle = styled.article`
	display: flex;
	justify-content: center;
	width: 100%;
	border-radius: 100%;
	padding: 0;
	background-color: #dedede;
	color: #232323;
	transition: background-color 0.5s, color 0.5s, font-size 0.5s, letter-spacing 0.5s;
	cursor: pointer;

	:hover {
		background-color: ${props => (props.locked ? 'firebrick' : 'darkslategrey')};
		color: ghostwhite;
		font-size: 1.15rem;
		letter-spacing: -1px;
		svg {
			fill: lightgrey;
		}
	}
	::before {
		content: '';
		display: block;
		padding-top: 100%;
	}
`;

export const StyledH1 = styled.h1`
	width: 100%;
	max-width: 300px;
	margin: 0;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const LockedH1 = styled(StyledH1)`
	margin-bottom: 1.5rem;
`;

export const FlexLink = styled(Link)`display: flex; width: 100%; border-radius: 100%;`;

export const KoanLockIcon = styled(LockIcon)`
	height: 1.5rem;
	fill: orangered;
	transition: fill 1s;
`;
