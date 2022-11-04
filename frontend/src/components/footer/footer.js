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

							<li className='book'>
								<a href='/booking' aria-label='book' className='tan wide-btn'>Book Now</a>
							</li>

							<li>
								<p className='h1-style'>Banff Log Cabin</p>
							</li>


							<div className='loc-cont'>
								<li className='location'>
									<p className='underline'>Our Location</p>
									<p>222 Glen Crescent Banff,</p>
									<p>AB T1L 1A6 +1</p>
									<p>(403) 762-3516</p>
								</li>
								<li className='contact'>
									<p className='underline'>Contact Us</p>
									<p>+1 (403) 762-3516</p>
									<p>reservations@banfflogcabin.ca</p>
								</li>
							</div>



							<li className='facebook-li'>
								<a href='https://www.facebook.com/BanffLogCabin' aria-label='book' className='facebook'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
									<p>Find us on Facebook</p></a>
							</li>
							<li className='book'>
								<a href='http://147.182.207.198:1337/admin/auth/login' aria-label='admin' className='facebook'>
									
									<p>Admin</p></a>


							</li>
						</ul>
					</div>
					<p>©2022 Banff Log Cabin</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
