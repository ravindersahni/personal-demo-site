import React from 'react';
import Koan from '../koan/koan.component';

const KoanList = ({ koans }) => (
	<ul>
		{koans.map(koan => (
			<li key={koan._id}>
				<Koan koan={koan} />
			</li>
		))}
	</ul>
);

export default KoanList;
