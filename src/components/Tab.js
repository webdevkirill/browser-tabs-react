import React from 'react';
import { useHighlight } from '../hooks/useHighlight';

export const Tab = ({ children }) => {
	const { highlightStyle, moveHighlight, hideHighlight } = useHighlight();

	return (
		<div
			className='tab'
			onMouseOut={hideHighlight}
			onMouseMove={moveHighlight}
		>
			<div className='highlight' style={highlightStyle} />
			{children}
		</div>
	);
};
