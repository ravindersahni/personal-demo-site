import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchKoanPreviewsStart } from '../../redux/koan/koan.actions';
import KoanPreviewList from '../../components/koan-preview-list/koan-preview-list.component';
import EnsoArticle from '../../components/enso-article/enso-article.component';

const KoansListPage = ({ fetchKoanPreviewsStart, koanPreviews }) => {
	useEffect(
		() => {
			fetchKoanPreviewsStart();
		},
		[ fetchKoanPreviewsStart ]
	);
	return (
		(koanPreviews && <KoanPreviewList koanPreviews={koanPreviews} />) || <EnsoArticle />
	);
};

const mapStateToProps = ({ koans: { previews } }) => ({ koanPreviews: previews });

export default connect(mapStateToProps, { fetchKoanPreviewsStart })(KoansListPage);
