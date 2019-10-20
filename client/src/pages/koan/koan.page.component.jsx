import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchKoanByIdStart } from '../../redux/koan/koan.actions';
import Koan from '../../components/koan/koan.component';
import WithErrorBoundary from '../../components/with-error-boundary/with-error-boundary.component';

const KoanPage = ({ selectedKoan, fetchKoanByIdStart }) => {
	const { id } = useParams();
	const history = useHistory();

	useEffect(
		() => {
			fetchKoanByIdStart(id);
		},
		[ fetchKoanByIdStart, id ]
	);

	useEffect(
		() => {
			const isSwitchWrapper = e =>
				e.target &&
				e.target.parentElement &&
				e.target.parentElement.className === 'switch-wrapper';

			const navigateOnClick = e => isSwitchWrapper(e) && history.push('/koans');
			window.addEventListener('click', navigateOnClick);
			return () => window.removeEventListener('click', navigateOnClick);
		},
		[ history ]
	);

	return (selectedKoan && <Koan koan={selectedKoan} />) || null;
};

const mapStateToProps = ({ koans }) => ({
	koanPreviews: koans.previews,
	selectedKoan: koans.selected
});

export default connect(mapStateToProps, { fetchKoanByIdStart })(
	WithErrorBoundary(KoanPage)
);
