import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchKoanByIdStart } from '../../redux/koan/koan.actions';
import Koan from '../../components/koan/koan.component';
import WithErrorBoundary from '../../components/with-error-boundary/with-error-boundary.component';
import useDismissLikeModal from '../../custom-hooks/use-dismiss-like-modal';

const KoanPage = ({ selectedKoan, fetchKoanByIdStart }) => {
	const { koan_id } = useParams();

	useEffect(
		() => {
			fetchKoanByIdStart(koan_id);
		},
		[ fetchKoanByIdStart, koan_id ]
	);

	useDismissLikeModal();

	return (selectedKoan && <Koan koan={selectedKoan} />) || null;
};

const mapStateToProps = ({ koans }) => ({
	koanPreviews: koans.previews,
	selectedKoan: koans.selected
});

export default connect(mapStateToProps, { fetchKoanByIdStart })(
	WithErrorBoundary(KoanPage)
);
