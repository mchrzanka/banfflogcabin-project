//this page will have the booking form and the stripe checkout

import React, { useState } from 'react';
import CheckoutForm from '../components/forms/CheckoutForm';

export default function BookingPageTwo() {
	return (
		<div>
			<div>
				<CheckoutForm />
			</div>
		</div>
	);
}
