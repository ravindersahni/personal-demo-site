import React from 'react';
import { connect } from 'react-redux';
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
	<FlexLink to={`/koans/${koan._id}/locked`} aria-label={`Link to locked koan info`}>
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

const KoanPreview = ({ koan, unlockedKoans }) =>
	unlockedKoans.some(id => id === koan._id) ? (
		<OpenKoanPreview koan={koan} />
	) : (
		<LockedKoanPreview koan={koan} />
	);

const mapStateToProps = state => ({
	unlockedKoans: (state.user || {}).unlockedKoans || []
});

export default connect(mapStateToProps)(KoanPreview);
