import React, { useState } from 'react';
import './App.css';
import { Tab } from './components/Tab';

function App() {
	const tabs = [
		{ id: 'HomePage', text: 'Главная' },
		{ id: 'AboutPage', text: 'О нас' },
		{ id: 'Advantages', text: 'Преимущуста' },
	];

	return (
		<div className='app'>
			<div className='browser'>
				<div className='tabs'>
					{tabs.map((tab) => (
						<Tab key={tab.id} text={tab.text} />
					))}
				</div>

				<div className='viewport'>Здесь страница</div>
			</div>
		</div>
	);
}

export default App;
