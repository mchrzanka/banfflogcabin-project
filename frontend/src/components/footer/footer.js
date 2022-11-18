import React from 'react';
import '../../scss/components/_footer.scss';

const Footer = () => {
	return (
		<>
			<footer className='site-footer' id='siteFooter'>
				<div className='container'>
					<div>
						<ul id='footerItems' className='footer-padding'>
							<div className='button book'>
								<a className='primary-btn btn footer' href='/bookingterms'>
									Book Now
								</a>
							</div>
							<li>
								<p className='h1-style'>Banff Log Cabin</p>
							</li>

							<div className='loc-cont'>
								<li className='location'>
									<p>Our Location</p>
									<p>222 Glen Crescent Banff,</p>
									<p>AB T1L 1A6 +1</p>
								</li>
								<li className='contact'>
									<p>Contact Us</p>
									<p>
										<a href='tel:(403) 762-3516'>+1 (403) 762-3516</a>
									</p>
									<p>
										<a href='mailto:reservations@banfflogcabin.ca'>
											reservations@banfflogcabin.ca
										</a>
									</p>
								</li>
							</div>

							<div className='admin'>
								<div className='button'>
									<a
										className='facebook-btn btn'
										href='https://www.facebook.com/BanffLogCabin'
									>
										<svg viewBox='0 0 320 512'>
											<path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
										</svg>
										<p>Find us on Facebook</p>
									</a>
								</div>
							</div>
						</ul>
					</div>
					<p className='copyright'>©2022 Banff Log Cabin</p>
					<div className='admin-link'>
						<a
							href='http://147.182.207.198:1337/admin/auth/login'
							aria-label='admin'
							className='facebook'
						>
							<p>Admin</p>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
