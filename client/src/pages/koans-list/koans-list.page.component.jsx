import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchKoansStart } from '../../redux/koan/koan.actions';
import KoanPreviewList from '../../components/koan-preview-list/koan-preview-list.component';
import EnsoArticle from '../../components/enso-article/enso-article.component';

const KoansListPage = ({ fetchKoansStart, koans, ...rest }) => {
	useEffect(
		() => {
			fetchKoansStart();
		},
		[ fetchKoansStart ]
	);
	return (koans && <KoanPreviewList koans={koans} />) || <EnsoArticle />;
};

const mapStateToProps = ({ koans }) => ({ koans });

export default connect(mapStateToProps, { fetchKoansStart })(KoansListPage);
