import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutePage';
import { AdvantagesPage } from '../pages/AdvantagesPage';

export function Routes() {
	return (
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
	);
}
