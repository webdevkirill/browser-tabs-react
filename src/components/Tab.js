import React from 'react';
import { useHighlight } from '../hooks/useHighlight';

export const Tab = ({ text }) => {
	const { highlightStyle, moveHighlight, hideHighlight } = useHighlight();

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
