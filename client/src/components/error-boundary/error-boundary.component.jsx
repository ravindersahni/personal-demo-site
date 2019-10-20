import React from 'react';
import { ErrorArticle, ErrorHeading, ErrorP } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
	constructor() {
		super();
		this.state = { hasErrored: false };
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		return this.state.hasErrored ? (
			<ErrorArticle>
				<ErrorHeading>Something has gone terribly awry</ErrorHeading>
				<ErrorP>Please try another tab.</ErrorP>
			</ErrorArticle>
		) : (
			this.props.children
		);
	}
}

export default ErrorBoundary;
