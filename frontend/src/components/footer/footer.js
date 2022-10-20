import React from 'react';
//npm install react-router-dom
import './footer.scss';

const handleClick = () => {
	console.log('click');
};

const Footer = () => {
	return (
		<>
			<footer className='site-footer' id='siteFooter'>
				<div className='site-container'>
					<div>
						<ul id='footerItems' className='footer-padding'>
							<li>
								<a href='/booking' aria-label='book' className='btn'>
									Book Now
								</a>
							</li>
							<li>
								<p>Contact Us</p>
							</li>
							<li>
								<p>222 Glen Crescent Banff, AB T1L 1A6 +1 (403) 762-3516</p>
							</li>
							<li>
								<p>2022 Banff Log Cabin</p>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
