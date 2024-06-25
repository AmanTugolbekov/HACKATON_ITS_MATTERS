import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useAuth } from '../components/context/AuthContextProvider'

const Navbar = () => {
	const { currentUser, handleLogOut, checkAuth, error } = useAuth()
	useEffect(() => {
		if (localStorage.getItem('tokens')) {
			checkAuth()
		}
	}, [])
	console.log(currentUser)
	const navigate = useNavigate()
	return (
		<div className='main'>
			<div className='header'>
				<div className='controls'>
					<button type='button' className='icon-button'>
						<FaChevronLeft />
					</button>
					<button type='button' className='icon-button'>
						<FaChevronRight />
					</button>
				</div>

				<div className='menu'>
					<ul>
						<li>
							<Link to='/premiumPage'>Premium</Link>
						</li>
						<li>
							<Link to='/support'>Support</Link>
						</li>
						<li>
							<Link to='/download'>Download</Link>
						</li>
						<li>
							<Link to='/download'>
								{currentUser ? (
									<span>{currentUser}</span>
								) : (
									<span>{currentUser}</span>
								)}
							</Link>
						</li>

						<li className='divider'>|</li>
						<li>
							<Link to='/register'>Sign Up</Link>
						</li>
					</ul>
					<button onClick={() => navigate('/login')} type='button'>
						Log In
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
