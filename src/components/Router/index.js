import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from '../../routes/pages/AboutUs';
import ContactUs from '../../routes/pages/ContactUs';
import Home from '../../routes/pages/Home';
import Hotel from "../../routes/pages/Hotel";
import Rooms from "../../routes/pages/Rooms";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact-us' element={<ContactUs />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/hotel' element={<Hotel />} />
				<Route path='/rooms' element={<Rooms />}/>
				{/* Dodaj potrzebne ścieżki aplikacji */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
