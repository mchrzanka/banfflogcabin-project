import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
	'pk_test_51Li5paK4ngSZKAWkjHOjI5adCtvkeOyliOdquLZRHMVP9Hj2MymaDGyHPZQzbZTtjdVaITHdwIH6OuwayYjO4zp200koRoW1Fn';

const stripePromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<Elements stripe={stripePromise}>
			<PaymentForm />
		</Elements>
	);
}
