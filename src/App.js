import React from 'react';
import './App.css';
import { Tab } from './components/Tab';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutePage';
import { AdvantagesPage } from './pages/AdvantagesPage';

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
					<div className='tabs'>
						{tabs.map((tab) => (
							<Tab key={tab.id}>
								<NavLink
									to={tab.link}
									activeClassName='is-active'
									exact={tab.exact ?? tab.exact}
								>
									{tab.linkText}
								</NavLink>
							</Tab>
						))}
					</div>

					<div className='viewport'>
						<Switch>
							<Route path='/about'>
								<AboutPage />
							</Route>
							<Route path='/advantages'>
								<AdvantagesPage />
							</Route>
							<Route path='/' exact={true}>
								<HomePage />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
