//first booking page, for calendar and confirm price/dates. Will have button that says "Continue Booking", that takes you to bookingPageTwo.
import React, { useState, useRef } from 'react';
import StripeContainer from '../components/stripe/StripeContainer';

import Calen from '../components/calendar/Calen';

export default function BookingPageOne() {
	const [showItem, setShowItem] = useState(false);

	return (
		<div>
			<div><Calen /></div>
			<div>
				{showItem ? (
					<div>
						<StripeContainer />
					</div>
				) : (
					<>
						{' '}
						<h3>$10.00</h3>
						<button className='tan' onClick={() => {console.log(Calen.data); setShowItem(true);}}>Continue</button>
						
					</>
				)}
			</div>
		</div>
	);
}
