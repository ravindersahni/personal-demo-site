import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserStart } from '../redux/user/user.actions';
import Header from './header/header.component';
import LandingPage from '../pages/landing/landing.page.component';
import DashboardPage from '../pages/dashboard/dashboard.page.component';
import KoansPage from '../pages/koans/koans.page.component';
import SurveyPage from '../pages/survey/survey.page.component';
import NotFoundPage from '../pages/not-found/not-found.page.component';
import GlobalStyle from './app.styles';

const App = ({ fetchUserStart }) => {
	useEffect(
		() => {
			fetchUserStart();
		},
		[ fetchUserStart ]
	);

	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<main>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/koans" component={KoansPage} />
					<Route exact path="/surveys" component={DashboardPage} />
					<Route path="/surveys/new" component={SurveyPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</main>
		</React.Fragment>
	);
};

export default connect(null, { fetchUserStart })(App);
