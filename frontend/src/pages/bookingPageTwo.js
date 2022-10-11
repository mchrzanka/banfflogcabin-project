//this page will have the booking form and the stripe checkout

import React from 'react';
import CheckoutForm from '../components/forms/CheckoutForm';
import CalendarMain from '../components/calendar/Calendar';

export default function BookingPageTwo() {
	return (
		<main>
			<div>Booking Page 2</div>

			<div>
				<CheckoutForm />
			</div>
		</main>
	);
}
