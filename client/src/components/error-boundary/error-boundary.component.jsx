import React from 'react';
import { ErrorArticle, ErrorText } from './error-boundary.styles';

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
				<ErrorText>Something has gone terribly awry</ErrorText>
			</ErrorArticle>
		) : (
			this.props.children
		);
	}
}

export default ErrorBoundary;
