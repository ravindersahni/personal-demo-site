import React from 'react';
import {
	StyledArticle,
	StyledH1,
	LockedH1,
	FlexLink,
	KoanLockIcon
} from './koan-preview.styles.jsx';

const LockedHeader = ({ children }) => (
	<LockedH1>
		<KoanLockIcon />
		{children}
	</LockedH1>
);

const LockedKoanPreview = ({ koan }) => (
	<FlexLink to={`/koans/${koan._id}`} aria-label={`Link to ${koan.title}`}>
		<StyledArticle locked>
			<LockedHeader>{koan.title}</LockedHeader>
		</StyledArticle>
	</FlexLink>
);

const OpenKoanPreview = ({ koan }) => (
	<FlexLink to={`/koans/${koan._id}`} aria-label={`Link to ${koan.title}`}>
		<StyledArticle>
			<StyledH1>{koan.title}</StyledH1>
		</StyledArticle>
	</FlexLink>
);

const KoanPreview = ({ koan }) =>
	Boolean(Math.floor(Math.random() * 2) - 1) ? (
		<OpenKoanPreview koan={koan} />
	) : (
		<LockedKoanPreview koan={koan} />
	);

export default KoanPreview;
