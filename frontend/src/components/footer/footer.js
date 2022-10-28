import React from 'react';
//npm install react-router-dom
import '../../scss/components/_footer.scss';

const handleClick = () => {
	console.log('click');
};

const Footer = () => {
	return (
		<>
			<footer className='site-footer' id='siteFooter'>
				<div className='container'>
					<div>
						<ul id='footerItems' className='footer-padding'>
							<li>
								<a href='/booking' aria-label='book' className='tan wide-btn'>
									Book Now
								</a>
							</li>
							<li>
								<p className='h1-style'>Banff Log Cabin</p>
							</li>
							<li>
							    <p className='underline'>Our Location</p>
								<p>222 Glen Crescent Banff, AB T1L 1A6 +1 (403) 762-3516</p>
							</li>
							<li>
							    <p className='underline'>Contact Us</p>
								<p>+1 (403) 762-3516 reservations@banfflogcabin.ca</p>
							</li>
							<li>
						    	<a href='https://www.facebook.com/BanffLogCabin' aria-label='book' className='dark'>Find us on Facebook</a>
							</li>
							<li>
								<p>©2022 Banff Log Cabin</p>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
