import React, { useState } from 'react'
import '../../scss/components/_navbar.scss'

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (event) => {
		setIsActive((current) => !current);
	};

	return (
		<>
			<header>
				<nav>
					<div className='main-menu container'>
						<div>
							<a href='/'>
								<img
									width='40'
									height='40'
									alt='Banff Log Cabin Logo'
									src='https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
								/>
							</a>
						</div>
						<div className={isActive ? 'mobile-menu is-active' : 'mobile-menu'}>
							<ul>
								<li className='navitem'>
									<a href='/'>HOME</a>
								</li>
								<li className='navitem'>
									<a href='/ourcabin'>OUR CABIN</a>
								</li >
								<li className='navitem'>
									<a href='/aboutus'>ABOUT US</a>
								</li>
								<li className='navitem'>
									<a href='/rates'>RATES</a>
								</li>
								<li className='navitem'>
									<a href='/contact'>CONTACT</a>
								</li>
								<li className='booknow-nav'>
									<a href='/booking'>BOOK NOW</a>
								</li>
							</ul>
						</div>

						<div
							onClick={handleClick}
							aria-label='Main Menu'
							className={isActive ? 'hamburger is-active' : 'hamburger'}
						>
							<span className='roofline'></span>
							<span className='roofline2'></span>
							<span className='line'></span>
							<span className='line'></span>
							<span className='line'></span>

						</div>
					</div>

				</nav>
			</header>
		</>
	);
};

export default Navbar;
