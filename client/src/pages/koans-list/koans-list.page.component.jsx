import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchKoanPreviewsStart } from '../../redux/koan/koan.actions';
import KoanPreviewList from '../../components/koan-preview-list/koan-preview-list.component';
import EnsoArticle from '../../components/enso-article/enso-article.component';
import WithErrorBoundary from '../../components/with-error-boundary/with-error-boundary.component';

const KoansListPage = ({ fetchKoanPreviewsStart, koanPreviews }) => {
	useEffect(
		() => {
			(koanPreviews && koanPreviews.length) || fetchKoanPreviewsStart();
		},
		[ koanPreviews, fetchKoanPreviewsStart ]
	);
	return (
		(koanPreviews && <KoanPreviewList koanPreviews={koanPreviews} />) || <EnsoArticle />
	);
};

const mapStateToProps = ({ koans: { previews } }) => ({ koanPreviews: previews });

export default connect(mapStateToProps, { fetchKoanPreviewsStart })(
	WithErrorBoundary(KoansListPage)
);
