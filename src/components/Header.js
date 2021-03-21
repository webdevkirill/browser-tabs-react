import React from 'react';
import { Tab } from './Tab';
import { NavLink } from 'react-router-dom';

export function Header({ tabs }) {
	return (
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
	);
}
