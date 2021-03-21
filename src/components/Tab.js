import React, { useState } from 'react';

export const Tab = ({ text }) => {
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

	return (
		<div
			className='tab'
			onMouseOut={hideHighlight}
			onMouseMove={moveHighlight}
		>
			<div className='highlight' style={highlightStyle} />
			<a>{text}</a>
		</div>
	);
};
