import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/user/user.actions';
import Header from './header/header.component';
import Landing from '../pages/landing/landing.component';
import Dashboard from '../pages/dashboard/dashboard.component';
import Survey from '../pages/survey/survey.component';
import GlobalStyle from './app.styles';

const App = ({ fetchUser }) => {
	useEffect(
		() => {
			fetchUser();
		},
		[ fetchUser ]
	);

	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<main>
				<Route exact path="/" component={Landing} />
				<Route exact path="/surveys" component={Dashboard} />
				<Route path="/surveys/new" component={Survey} />
			</main>
		</React.Fragment>
	);
};

export default connect(null, { fetchUser })(App);
