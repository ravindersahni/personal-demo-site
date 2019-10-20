import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import { fetchUserStart } from './redux/user/user.actions';
import Header from './components/header/header.component';
import LandingPage from './pages/landing/landing.page.component';
import AboutPage from './pages/about/about.page.component';
import DashboardPage from './pages/dashboard/dashboard.page.component';
import KoansListPage from './pages/koans-list/koans-list.page.component';
import KoanPage from './pages/koan/koan.page.component';
import WeatherPage from './pages/weather/weather.page.component';
import GamesPage from './pages/games/games.page.component';
import SurveyPage from './pages/survey/survey.page.component';
import NotFoundPage from './pages/not-found/not-found.page.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import GlobalStyle from './app.style';

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
			<ErrorBoundary>
				<main>
					<AnimatedSwitch
						atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0 }}
						atActive={{ opacity: 1 }}
						className="switch-wrapper"
					>
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/koans" component={KoansListPage} />
						<Route path="/koans/:id" component={KoanPage} />
						<Route exact path="/weather" component={WeatherPage} />
						<Route exact path="/games" component={GamesPage} />
						<Route exact path="/surveys" component={DashboardPage} />
						<Route path="/surveys/new" component={SurveyPage} />
						<Route component={NotFoundPage} />
					</AnimatedSwitch>
				</main>
			</ErrorBoundary>
			{/* <footer>
				<div style={{ color: '#232323' }}>
					Lock icon made by&nbsp;
					<a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">
						Those Icons&nbsp;
					</a>
					from&nbsp;
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
				<div>Heart icons made by:&nbsp;
					<a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
						Smashicons&nbsp;
					</a>
					from&nbsp;
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
			</footer> */}
		</React.Fragment>
	);
};

export default connect(null, { fetchUserStart })(App);
