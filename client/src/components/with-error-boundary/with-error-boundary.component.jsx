import React from 'react';
import ErrorBoundary from '../error-boundary/error-boundary.component';

const WithErrorBoundary = WrappedComponent => props => (
	<ErrorBoundary>
		<WrappedComponent {...props} />
	</ErrorBoundary>
);

export default WithErrorBoundary;
