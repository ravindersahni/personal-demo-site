import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/user/user.actions';
import Header from './header/header.component';
import Landing from './landing/landing.component';
import GlobalStyle from './app.styles';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

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
				<Route path="/surveys/new" component={SurveyNew} />
			</main>
		</React.Fragment>
	);
};

export default connect(null, { fetchUser })(App);
