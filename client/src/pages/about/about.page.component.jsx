import React, { useEffect } from 'react';
import WithErrorBoundary from '../../components/with-error-boundary/with-error-boundary.component';

const AboutPage = () => {
	useEffect(() => {
		throw new Error();
	}, []);

	return <div />;
};

export default WithErrorBoundary(AboutPage);
