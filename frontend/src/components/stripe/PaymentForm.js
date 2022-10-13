import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import validateFormInfo from '../../validation/validateFormInfo';
import ToggleSwitch from '../buttons/ToggleSwitch';

export default function PaymentForm() {
	//this is for capturing the client info in the form.
	const { handleChange, values, handleSubmitValidation, errors } =
		useForm(validateFormInfo);

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
		//capturing client info

		//once the successful payment has gone through, we're going to hide all the form stuff and show the success message.
		//{} around something is a dynamic value. For style ={{}}, we tell react that the outer brackets are a dynamic value, and the inner brackets are the javascript object. So inside, we do key value pairs for styling.
		<>
			{!success ? (
				<form
					onSubmit={handleSubmit}
					style={{
						backgroundColor: 'pink',
					}}
				>
					<fieldset>
						{/* <div>
							<p>{{ ...values }.firstname}</p>
							<p>{{ ...values }.lastname}</p>
							<p>{{ ...values }.email}</p>
							<p>{{ ...values }.phone}</p>
							<p>{{ ...values }.breakfast}</p>
						</div> */}
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
							<label>Pay Full Amount Now?</label>
							<React.Fragment>
								<ToggleSwitch label='Payment' />
							</React.Fragment>
						</div>
					</fieldset>
					<fieldset className='FormGroup'>
						<div class='FormRow'>
							<CardElement />
						</div>
					</fieldset>
					<button onClick={handleSubmitValidation}>Pay</button>
				</form>
			) : (
				<div>
					<h2>Booking Completed! Start packing your bags.</h2>
				</div>
			)}
		</>
	);
}
