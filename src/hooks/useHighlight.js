import { useState } from 'react';

export const useHighlight = () => {
	const [highlightStyle, setHighlightStyle] = useState({
		left: 0,
		opacity: 0,
	});

	const moveHighlight = (e) => {
		setHighlightStyle({
			left: e.nativeEvent.layerX - 150,
		});
	};

	const hideHighlight = (e) => {
		setHighlightStyle({
			left: e.nativeEvent.layerX - 150,
			opacity: 0,
		});
	};

	return {
		highlightStyle,
		moveHighlight,
		hideHighlight,
	};
};
