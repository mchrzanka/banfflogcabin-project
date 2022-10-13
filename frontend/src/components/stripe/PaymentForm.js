import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
	theme: 'flat',
	variables: {
		fontFamily: ' "Gill Sans", sans-serif',
		fontLineHeight: '1.5',
		borderRadius: '10px',
		colorBackground: '#F6F8FA',
		colorPrimaryText: '#262626',
	},
	rules: {
		'.Block': {
			backgroundColor: 'var(--colorBackground)',
			boxShadow: 'none',
			padding: '12px',
		},
		'.Input': {
			padding: '12px',
		},
		'.Input:disabled, .Input--invalid:disabled': {
			color: 'lightgray',
		},
		'.Tab': {
			padding: '10px 12px 8px 12px',
			border: 'none',
		},
		'.Tab:hover': {
			border: 'none',
			boxShadow:
				'0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
		},
		'.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
			border: 'none',
			backgroundColor: '#fff',
			boxShadow:
				'0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
		},
		'.Label': {
			fontWeight: '500',
		},
	},
};

export default function PaymentForm() {
	//if payment goes through
	const [success, setSuccess] = useState(false);

	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		e.preventDefault();

		const [error, paymentMethod] = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		});

		if (!error) {
			try {
				//tries to accept the payment, if it goes through, it will take you to a success page. Right now I just passed in $10 as the amount for payment, will update with actual value later.
				const { id } = paymentMethod;
				const response = await axios.post('http://localhost:3000/payment', {
					amount: 1000,
					id,
				});

				if (response.data.success) {
					console.log('Successful Payment!');
					setSuccess(true);
				}
			} catch (error) {
				//error for if the payment doesn't go through.
				console.log('Error', error);
			}
		} else {
			console.log(error.message);
		}
	};
	return (
		//once the successful payment has gone through, we're going to hide all the form stuff and show the success message.
		<>
			{!success ? (
				<form onSubmit={handleSubmit}>
					<fieldset className='FormGroup'>
						<div class='FormRow'>
							<CardElement options={CARD_OPTIONS} />
						</div>
					</fieldset>
					<button>Pay</button>
				</form>
			) : (
				<div>
					<h2>Booking Completed! Start packing your bags.</h2>
				</div>
			)}
		</>
	);
}
