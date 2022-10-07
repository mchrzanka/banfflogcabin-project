import React from 'react';
import CheckoutForm from '../components/forms/CheckoutForm';
import CalendarMain from '../components/calendar/Calendar';


export default function Booking() {
	return (
		<main>
			<div>Booking Page</div>

			<div>
				<CalendarMain />
			</div>

			<div>
				<CheckoutForm />
			</div>
		</main>
	);
}
