import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const PUBLIC_KEY =
	'pk_test_51Li5paK4ngSZKAWkjHOjI5adCtvkeOyliOdquLZRHMVP9Hj2MymaDGyHPZQzbZTtjdVaITHdwIH6OuwayYjO4zp200koRoW1Fn';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<div>
			<Elements stripe={stripeTestPromise}>
				<CheckoutForm />
			</Elements>
		</div>
	);
}
