import React from 'react';
import './App.css';

function App() {
	return (
		<div className='app'>
			<div className='browser'>
				<div className='tabs'>
					<div className='tab'>
						<a>Главная</a>
					</div>
					<div className='tab'>
						<a>О нас</a>
					</div>
					<div className='tab'>
						<a>Преимущеста</a>
					</div>
				</div>

				<div className='viewport'>Pages Go Here</div>
			</div>
		</div>
	);
}

export default App;
