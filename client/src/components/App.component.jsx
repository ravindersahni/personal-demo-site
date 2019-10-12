import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/user/user.actions';
import Header from './header/Header.component';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = ({ fetchUser }) => {
	useEffect(
		() => {
			fetchUser();
		},
		[ fetchUser ]
	);

	return (
		<div className="container">
			<Header />
			<Route exact path="/" component={Landing} />
			<Route exact path="/surveys" component={Dashboard} />
			<Route path="/surveys/new" component={SurveyNew} />
		</div>
	);
};

export default connect(null, { fetchUser })(App);
