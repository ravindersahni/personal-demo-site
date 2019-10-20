import React from 'react';
import WithErrorBoundary from '../../components/with-error-boundary/with-error-boundary.component';

const SurveyPage = () => {
	let pageName = 'Survey';
	return (
		<article>
			<h1>{pageName}</h1>
		</article>
	);
};

export default WithErrorBoundary(SurveyPage);
