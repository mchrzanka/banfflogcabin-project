//first booking page, for calendar and confirm price/dates. Will have button that says "Continue Booking", that takes you to bookingPageTwo.

import React, { useState } from 'react';
import CheckoutForm from '../components/forms/CheckoutForm';
import StripeContainer from '../components/stripe/StripeContainer';

import CalendarMain from '../components/calendar/Calendar';

export default function BookingPageOne() {
	const [showItem, setShowItem] = useState(false);

	return (
		<main>
			<div>Booking Page 1</div>

			<div>
				<CalendarMain />
			</div>
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
		</main>
	);
}