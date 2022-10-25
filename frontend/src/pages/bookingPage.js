//first booking page, for calendar and confirm price/dates. Will have button that says "Continue Booking", that takes you to bookingPageTwo.

import React, { useState } from 'react';
import StripeContainer from '../components/stripe/StripeContainer';

import CalendarMain from '../components/calendar/Calen';

export default function BookingPageOne() {
	const [showItem, setShowItem] = useState(false);

	return (
		<div>
			<div>Booking Page 1</div>

			<div>{/* <CalendarMain /> */}</div>
			<div>
				{showItem ? (
					<div>
						{/* <CheckoutForm /> */}
						<StripeContainer />
					</div>
				) : (
					<>
						{' '}
						<h3>$10.00</h3>
						<button onClick={() => setShowItem(true)}>Book Now</button>
					</>
				)}
			</div>
		</div>
	);
}
