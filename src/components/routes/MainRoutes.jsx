import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Premium from '../products/Premium'
import ListenToSong from '../products/ListenToSong'
import About from '../products/About'

import ListenToPlaylistSong from '../products/ListenToPlaylistSong'
import Login from '../auth/Login'
import Register from '../auth/Register'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/search' element={<HomePage />} />
			<Route path='/premiumPage' element={<Premium />} />
			<Route path='/song' element={<ListenToSong />} />
			<Route path='/about' element={<About />} />
			<Route path='/playlist' element={<ListenToPlaylistSong />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	)
}

export default MainRoutes
