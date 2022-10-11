//first booking page, for calendar and confirm price/dates. Will have button that says "Continue Booking", that takes you to bookingPageTwo.

import React from 'react';

import CalendarMain from '../components/calendar/Calendar';

export default function BookingPageOne() {
	return (
		<main>
			<div>Booking Page 1</div>

			<div>
				<CalendarMain />
			</div>
		</main>
	);
}
