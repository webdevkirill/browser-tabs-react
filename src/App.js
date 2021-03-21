import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './components/Routes';

function App() {
	const tabs = [
		{ id: 'HomePage', linkText: 'Главная', link: '/', exact: true },
		{ id: 'AboutPage', linkText: 'О нас', link: '/about' },
		{ id: 'Advantages', linkText: 'Преимущуста', link: '/advantages' },
	];

	return (
		<Router>
			<div className='app'>
				<div className='browser'>
					<Header tabs={tabs} />
					<Routes />
				</div>
			</div>
		</Router>
	);
}

export default App;
