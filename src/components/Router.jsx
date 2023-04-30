import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'
import TravelSingle from './Travel/TravelSingle'
import About from './About'

export default function Router() {

	return (
		<>
		<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />

					<Route path='/traveldetail' element={<TravelSingle />} />
					<Route path="/traveldetail/:id" element={<TravelSingle />} />
					{/* <Route path=":slug" element={<TravelSingle />} /> */}

					<Route path='/about' element={<About />} />
				</Routes>

			</BrowserRouter>
		</>
	)
}
