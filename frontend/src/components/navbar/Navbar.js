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
						<div className='logo'>
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
									<a href='/'>Home</a>
								</li>
								<li className='navitem'>
									<a href='/ourcabin'>Our Cabin</a>
								</li >
								<li className='navitem'>
									<a href='/aboutus'>About us</a>
								</li>
								<li className='navitem'>
									<a href='/rates'>Rates</a>
								</li>
								<li className='navitem'>
									<a href='/contact'>Contact</a>
								</li>
								<li className='booknow-nav' >
									<a href='/booking'>Book Now</a>
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
