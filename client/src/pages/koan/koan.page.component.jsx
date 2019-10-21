import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchKoanByIdStart } from '../../redux/koan/koan.actions';
import Koan from '../../components/koan/koan.component';
import WithErrorBoundary from '../../components/with-error-boundary/with-error-boundary.component';
import useDismissLikeModal from '../../custom-hooks/use-dismiss-like-modal';

const KoanPage = ({ selectedKoan, koanPreviews, fetchKoanByIdStart, user }) => {
	const { koan_id } = useParams();
	const history = useHistory();

	useEffect(
		() => {
			if (user && user.unlockedKoans.some(id => id === koan_id)) {
				fetchKoanByIdStart(koan_id);
			}
			else {
				// history.replace(`/koans/${koan_id}/locked`);
			}
		},
		[ fetchKoanByIdStart, koan_id, user, history, koanPreviews ]
	);

	useDismissLikeModal();

	return (selectedKoan && <Koan koan={selectedKoan} />) || null;
};

const mapStateToProps = ({ koans, user }) => ({
	koanPreviews: koans.previews,
	selectedKoan: koans.selected,
	user
});

export default connect(mapStateToProps, { fetchKoanByIdStart })(
	WithErrorBoundary(KoanPage)
);
