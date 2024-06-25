import React, { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay, FaStop } from 'react-icons/fa'
import { FaHeartCirclePlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const ListenToSong = () => {
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

	useEffect(() => {
		const audio = audioRef.current

		const updateDuration = () => {
			setDuration(audio.duration)
		}

		const updateTime = () => {
			setCurrentTime(audio.currentTime)
		}

		audio.addEventListener('loadedmetadata', updateDuration)
		audio.addEventListener('timeupdate', updateTime)

		return () => {
			audio.removeEventListener('loadedmetadata', updateDuration)
			audio.removeEventListener('timeupdate', updateTime)
		}
	}, [])

	// Форматирование времени в mm:ss
	const formatTime = time => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	// Обработчик нажатия кнопки воспроизведения/паузы
	const togglePlayPause = () => {
		const audio = audioRef.current
		if (isPlaying) {
			audio.pause()
		} else {
			audio.play()
		}
		setIsPlaying(prevState => !prevState)
	}
	// Обработчик изменения позиции ползунка
	const handleSliderChange = event => {
		const audio = audioRef.current
		audio.currentTime = event.target.value
		setCurrentTime(audio.currentTime)
	}
	return (
		<div>
			<div className='listen-to-page'>
				<div className='song-img'>
					<img
						src='https://images.genius.com/777ce95cc69a4d8ef326e421e991932a.1000x1000x1.png'
						alt=''
					/>
				</div>
				<div className='text-info'>
					<div className='title-of-song'>
						<span>Song</span>
						<span>Father stretch my hands pt.1</span>
					</div>
					<div className='other-info-about-song'>
						<ul className='main-text-ab-song'>
							<li>
								<img
									src='https://i.pinimg.com/736x/95/30/53/95305344d4f9d8c0cdc405cc78eb8f5d.jpg'
									alt=''
									className='author-prof-photo'
								/>
								<span>Kanye West</span>
							</li>
							<li className='album-name'>
								<span>The life of Pablo</span>
							</li>
							<li className='song-duration'>2.15</li>
							<li className='amount-of-listened'>1 107 343 434</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='play-song-db'>
				<div className='data-etc'>
					<ul>
						<li>
							<span>7 мая</span>
						</li>
						<li>
							<span>Длительность - {formatTime(duration)} - </span>
							<span>{formatTime(currentTime)}</span>
							<div className='slider-shit'>
								<input
									type='range'
									className='track-slider'
									value={currentTime}
									max={duration}
									onChange={handleSliderChange}
								/>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className='polsunok'>
				<audio
					ref={audioRef}
					src='https://media.djlunatique.com/2024/06/we-can-go-gyatt-4-gyatt-.mp3'
				></audio>
				<div className='controls'>
					<button className='play-pause-btn' onClick={togglePlayPause}>
						{isPlaying ? (
							<FaPause className='icon-play' />
						) : (
							<FaPlay className='icon-play' />
						)}
					</button>
					<Link>
						<FaHeartCirclePlus
							style={{ paddingLeft: '25px' }}
							className='fav-btn'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ListenToSong
