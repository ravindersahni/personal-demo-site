import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useDismissLikeModal = () => {
	const history = useHistory();

	useEffect(
		() => {
			const isSwitchWrapper = e =>
				e.target &&
				e.target.parentElement &&
				e.target.parentElement.className === 'switch-wrapper';

			const navigateOnClick = e => isSwitchWrapper(e) && history.push('/koans');
			window.addEventListener('click', navigateOnClick);
			return () => window.removeEventListener('click', navigateOnClick);
		},
		[ history ]
	);
};

export default useDismissLikeModal;
