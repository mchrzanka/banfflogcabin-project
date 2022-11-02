import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import validateFormInfo from '../../validation/validateBookingForm';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const handleSubmit = (stripe, elements, intentKey, values) => async () => {
	//STRIPE

	const cardElement = elements.getElement(CardElement);

	let attemptPaymentResponse = await stripe.confirmCardPayment(intentKey, {
		payment_method: {
			card: cardElement,
			billing_details: {
				name: 'TEST',
			},
		},
	});
};

export default function PaymentForm() {
	const { handleChange, values, handleSubmitValidation, errors } =
		useForm(validateFormInfo);

	//put booking form info into strapi. Just need to add an "if booking !errors" kind of thing, so it posts only when the booking 100% goes through.
	axios
		.post('http://147.182.207.198:1337/api/bookings', {
			data: {
				firstname: values.firstname,
				lastname: values.lastname,
				email: values.email,
				phone: values.phone,
				breakfast: values.breakfast,
			},
		})
		.then((response) => {
			console.log(response);
		});

	const stripe = useStripe();
	const elements = useElements();

	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/stripeIntent'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	let secret = data.client_secret;

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
					</div>
				</fieldset>
				<CardElement />
				<button onClick={handleSubmit(stripe, elements, secret)}>
					Confirm Booking
				</button>{' '}
			</form>
		</>
	);
}
