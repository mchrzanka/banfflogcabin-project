import React from 'react';
import logo from '../../img/logo.png';
import '../../scss/components/_footer.scss';
const Footer = () => {
	return (
		<>
			<footer className='site-footer' id='siteFooter'>
				<div className='container'>
					<div>
						<div id='footerItems' className='footer-padding'>
							<div className='li'>
								<div className='logo-container'>
									<a href='/'>
										<img
											alt='Banff Log Cabin Logo'
											src={logo}
											className='logo'
										/>
									</a>
								</div>
							</div>

							<div className='loc-cont'>
								<div className='location'>
									<p>Our Location</p>
									<p>222 Glen Crescent Banff,</p>
									<p>AB T1L 1A6 +1</p>
								</div>
								<div className='contact'>
									<p>Contact Us</p>
									<p>
										<a href='tel:(403) 762-3516'>+1 (403) 762-3516</a>
									</p>
									<p>
										<a href='mailto:reservations@banfflogcabin.ca'>
											reservations@banfflogcabin.ca
										</a>
									</p>
								</div>
							</div>

							<div className='footer-buttons'>
								<div className='button book'>
									<a className='primary-btn btn footer' href='/bookingterms'>
										Book Now
									</a>
								</div>
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
						</div>
					</div>
					<p className='copyright'>
						©{new Date().getFullYear()} Banff Log Cabin
					</p>
					<div className='admin-link'>
						<a
							href='https://strapi-qzpr.onrender.com/admin/auth/login'
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
