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
						<div>
							<ul className='menu'>
								<li>
									<a href='/ourcabin'>Our Cabin</a>
								</li>
								<li>
									<a href='/aboutus'>About Us</a>
								</li>
								<li>
									<a href='/rates'>Rates</a>
								</li>
								<li>
									<a href='/contact'>Contact</a>
								</li>
								<li className='tan'>
									<a href='/booking'>Book Now</a>
								</li>
							</ul>
						</div>

						<button
							onClick={handleClick}
							aria-label='Main Menu'
							className={isActive ? 'hamburger is-active' : 'hamburger'}
						>
							<span className='roofline'></span>
							<span className='roofline2'></span>							
							<span className='line'></span>
							<span className='line'></span>
							<span className='line'></span>
							<span className='wall'></span>
							<p>menu</p>
						</button>
					</div>
					<div className={isActive ? 'mobile-menu' : 'mobile-menu is-active'}>
						<ul>
							<li>
								<a href='/ourcabin'>Our Cabin</a>
							</li>
							<li>
								<a href='/aboutus'>About Us</a>
							</li>
							<li>
								<a href='/rates'>Rates</a>
							</li>
							<li>
								<a href='/contact'>Contact</a>
							</li>
							<li className='tan'>
								<a href='/booking'>Book Now</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
