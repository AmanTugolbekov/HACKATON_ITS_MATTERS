import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
const ProductCard = () => {
	return (
		<div style={{ marginLeft: '245px' }}>
			<div className='content'>
				<div className='playlist'>
					<Link style={{ textDecoration: 'none' }} to={'/song'}>
						<div className='song'>
							<img src='https://i.redd.it/8waubvacmtf51.gif' alt='Song' />
							<div className='play'>
								<Link style={{ textDecoration: 'none' }}>
									<FaPlay className='icon-play' />
								</Link>
							</div>
							<h4>Written by Amin</h4>
							<p>Masterpiece for all ears...</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
