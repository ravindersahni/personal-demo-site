import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/Header.component';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => (
	<div className="container">
		<Header />
		<Route exact path="/" component={Landing} />
		<Route exact path="/surveys" component={Dashboard} />
		<Route path="/surveys/new" component={SurveyNew} />
	</div>
);

export default App;
