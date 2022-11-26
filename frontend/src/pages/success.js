import React from 'react';
import '../scss/pages/_success.scss'


export default function SuccessPage() {
	return (
		<div className='container-anim'>

			<div class="container-anim">
				<div class="message-thanks">
					<h1>Booking Confirmed.</h1>
					<h2>See you soon!</h2>
					<p>If you need to make changes to your booking, please send us an email.</p>
				</div>
				<div class="bird-container bird-container--one">
					<div class="bird bird--one"></div>
				</div>

				<div className='bird-container bird-container--two'>
					<div className='bird bird--two'></div>
				</div>
				<div class="bird-container bird-container--three">
					<div class="bird bird--three"></div>
				</div>

				<div className='bird-container bird-container--four'>
					<div className='bird bird--four'></div>
				</div>

				<div className='bird-container bird-container--five'>
					<div className='bird bird--five'></div>
				</div>

				<div className='bird-container bird-container--six'>
					<div className='bird bird--six'></div>
				</div>
			</div>
			);
}
