import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import { fetchUserStart } from '../redux/user/user.actions';
import Header from './header/header.component';
import LandingPage from '../pages/landing/landing.page.component';
import DashboardPage from '../pages/dashboard/dashboard.page.component';
import KoansListPage from '../pages/koans-list/koans-list.page.component';
import KoanPage from '../pages/koan/koan.page.component';
import SurveyPage from '../pages/survey/survey.page.component';
import NotFoundPage from '../pages/not-found/not-found.page.component';
import GlobalStyle from './app.style.global';

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
				<AnimatedSwitch
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
					className="switch-wrapper"
				>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/koans" component={KoansListPage} />
					<Route path="/koans/:id" component={KoanPage} />
					<Route exact path="/surveys" component={DashboardPage} />
					<Route path="/surveys/new" component={SurveyPage} />
					<Route component={NotFoundPage} />
				</AnimatedSwitch>
			</main>
		</React.Fragment>
	);
};

export default connect(null, { fetchUserStart })(App);
