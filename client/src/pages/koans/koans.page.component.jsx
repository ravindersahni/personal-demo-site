import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchKoansStart } from '../../redux/koan/koan.actions';
import KoanList from '../../components/koan-list/koan-list.component';
import EnsoArticle from '../../components/enso-article/enso-article.component';

const KoansPage = ({ fetchKoansStart, koans, ...rest }) => {
	useEffect(
		() => {
			fetchKoansStart();
		},
		[ fetchKoansStart ]
	);
	return (
		<React.Fragment>
			{koans && <KoanList koans={koans} />}
			<EnsoArticle {...rest} />
		</React.Fragment>
	);
};

const mapStateToProps = ({ koans }) => ({ koans });

export default connect(mapStateToProps, { fetchKoansStart })(KoansPage);
