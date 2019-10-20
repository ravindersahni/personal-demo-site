import React from 'react';
import EnsoArticle from '../../components/enso-article/enso-article.component';
import WithErrorBoundary from '../../components/with-error-boundary/with-error-boundary.component';

const DashboardPage = () => <EnsoArticle />;

export default WithErrorBoundary(DashboardPage);
