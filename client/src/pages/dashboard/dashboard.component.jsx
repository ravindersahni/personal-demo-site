import React from 'react';
import { ReactComponent as Enso } from '../../assets/images/enso.svg';

const Dashboard = () => {
	return (
		<article
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%'
			}}
		>
			<Enso style={{ maxWidth: '36%' }} />
		</article>
	);
};

export default Dashboard;
