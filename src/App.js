import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
