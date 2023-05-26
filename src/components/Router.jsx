import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'
import TravelSingle from './Travel/TravelSingle'
import About from './About'
import Footer from './Footer'

export default function Router() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={
						<>
							<Navbar />
							<Main />
						</>
					} />
					<Route path='/traveldetail' element={
						<>
							<Navbar />
							<TravelSingle />
							<Footer />
						</>
					} />
					{/* <Route path="/traveldetail/:id" element={<TravelSingle />} /> */}
					<Route path=':slug' element={
						<>
							<Navbar />
							<TravelSingle />
							<Footer />
						</>
					} />
					<Route path='/about' element={
						<>
							<Navbar />
							<About />
							<Footer />
						</>
					} />
				</Routes>

			</BrowserRouter>
		</>
	)
}
