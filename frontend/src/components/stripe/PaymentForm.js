import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import validateFormInfo from '../../validation/validateFormInfo';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const handleDeposit = () => {
	console.log('deposit');
};

const handleFull = () => {
	console.log('full');
};

const handleSubmit = (stripe, elements) => async () => {
	const cardElement = elements.getElement(CardElement);

	// SUPPOSE TO BE ON BACKEND
	let secretKey = process.env.REACT_APP_STRIPE_SECRET_KEY;

	//will have to change the price to the dynamic price from the logic, and maybe change description to full or deposit payment.
	let stripeResult = await axios.post(
		'https://api.stripe.com/v1/payment_intents',
		{
			amount: 4000,
			currency: 'CAD',
			description: 'Booking Payment',
			payment_method_types: ['card'],
		},
		{
			headers: {
				Authorization: `Bearer ${secretKey}`,
				'content-type': 'application/x-www-form-urlencoded',
			},
		}
	);

	// return result.id; // <---- return this in a json response from your backend (strapi) custom controller endpoint

	console.log('Stripe payment intent:');
	console.dir(stripeResult);

	let clientSecret = stripeResult.data.client_secret;

	console.log('client secret:');
	console.dir(clientSecret);

	let attemptPaymentResponse = await stripe.confirmCardPayment(clientSecret, {
		payment_method: {
			card: cardElement,
			billing_details: {
				name: 'TEST',
			},
		},
	});

	console.dir(attemptPaymentResponse);
};

// 	const handleSubmit = async (e) => {

// 		let attemptPaymentResponse = await stripe.confirmCardPayment(
// 			stripeResult.id,
// 			{
// 				payment_method: {
// 					card: elements.getElement(PaymentElement),
// 					billing_details: {
// 						name: 'DEMO',
// 					},
// 				},
// 			}
// 		);

// 		if (attemptPaymentResponse.error) {
// 			console.log('there is an error:'.error);
// 		} else {
// 			console.log('there is no error');
// 		}

// 		console.dir('payment attempt!');
// 		console.dir(attemptPaymentResponse);
// 	};

// 	);
// }

export default function PaymentForm() {
	const { handleChange, values, handleSubmitValidation, errors } =
		useForm(validateFormInfo);

	const stripe = useStripe();
	const elements = useElements();

	return (
		<>
			<form
				onSubmit={handleSubmitValidation}
				style={{
					backgroundColor: 'pink',
				}}
			>
				<fieldset>
					<div>
						<p>{values.firstname}</p>
						<p>{values.lastname}</p>
						<p>{values.email}</p>
						<p>{values.phone}</p>
						<p>{values.breakfast}</p>
					</div>
					<div>
						<label>First Name</label>
						<input
							type='text'
							name='firstname'
							value={values.firstname}
							onChange={handleChange}
							placeholder='Jane'
						/>
						{errors.firstname && <p>{errors.firstname}</p>}
					</div>
					<div>
						<label>Last Name</label>
						<input
							type='text'
							name='lastname'
							value={values.lastname}
							onChange={handleChange}
							placeholder='Doe'
						/>
						{errors.lastname && <p>{errors.lastname}</p>}
					</div>
					<div>
						<label>Email</label>
						<input
							type='text'
							name='email'
							value={values.email}
							onChange={handleChange}
							placeholder='email@address.com'
						/>
						{errors.email && <p>{errors.email}</p>}
					</div>
					<div>
						<label>Phone</label>
						<input
							type='tel'
							name='phone'
							value={values.phone}
							onChange={handleChange}
							placeholder='888-888-8888'
						/>
						{errors.phone && <p>{errors.phone}</p>}
					</div>
					<div>
						<label>Dietary Restrictions</label>
						<p>
							Banff Log Cabin delivers breakfast in the morning. Please let us
							know if you have any food allergies, and we will do our best to
							accommodate.
						</p>
						<textarea
							name='breakfast'
							value={values.breakfast}
							onChange={handleChange}
							placeholder='Tell us of any dietary restrictions.'
						/>
					</div>
					<div>
						<label>Payment Amount</label>
						<button
							onClick={() => {
								handleDeposit('deposit price variable goes here');
							}}
						>
							Pay Deposit
						</button>
						<button
							onClick={() => {
								handleFull('full price goes here');
							}}
						>
							Pay Full Amount
						</button>
					</div>
				</fieldset>
				<CardElement />
				<button onClick={handleSubmit(stripe, elements)}>Buy</button>{' '}
			</form>
		</>
	);
}
