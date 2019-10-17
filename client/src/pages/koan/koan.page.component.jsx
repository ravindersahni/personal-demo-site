import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchKoanByIdStart } from '../../redux/koan/koan.actions';
import Koan from '../../components/koan/koan.component';

const KoanPage = ({ koans, selectedKoan, fetchKoanByIdStart }) => {
	const { id } = useParams();

	useEffect(
		() => {
			fetchKoanByIdStart(id);
		},
		[ fetchKoanByIdStart, id ]
	);

	return (selectedKoan && <Koan koan={selectedKoan} />) || null;
};
/*
Need to:
x fetch koan by id
- use existing koans if applicable.
- add favorite/unfavorite functionality
*/
const mapStateToProps = ({ koans }) => ({
	koanPreviews: koans.previews,
	selectedKoan: koans.selected
});

const mapDispatchToProps = dispatch => ({
	fetchKoanByIdStart: id => dispatch(fetchKoanByIdStart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(KoanPage);
