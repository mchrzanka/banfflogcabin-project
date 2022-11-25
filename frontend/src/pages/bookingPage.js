//first booking page, for calendar and confirm price/dates. Will have button that says "Continue Booking", that takes you to bookingPageTwo.
import React, { useState } from 'react';

import Calen from '../components/calendar/Calen';

export default function BookingPageOne() {

	return (
		<div>
			<div><Calen /></div>
		</div>
	);
}
