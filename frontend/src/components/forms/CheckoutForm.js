import React, { Component } from 'react';

import useForm from '../../hooks/useForm';

import ToggleSwitch from '../buttons/ToggleSwitch';

const CheckoutForm = () => {
	const { handleChange, values, handleSubmit } = useForm();

	console.log({ ...values });
	console.log({ ...values }.firstname);

	return (
		<div>
			<div>
				<p>{{ ...values }.firstname}</p>
			</div>
			<form className='booking-form' onSubmit={handleSubmit}>
				<div>
					<label>First Name</label>
					<input
						type='text'
						name='firstname'
						value={values.firstname}
						onChange={handleChange}
						placeholder='Jane'
						required
					></input>
				</div>
				<div>
					<label>Last Name</label>
					<input
						type='text'
						name='lastname'
						value={values.lastname}
						onChange={handleChange}
						placeholder='Doe'
						required
					></input>
				</div>
				<div>
					<label>Email</label>
					<input
						type='email'
						name='email'
						value={values.email}
						onChange={handleChange}
						placeholder='email@address.com'
						required
					></input>
				</div>
				<div>
					<label>Phone No.</label>
					<input
						type='tel'
						name='phone'
						value={values.phone}
						onChange={handleChange}
						placeholder='888-888-8888'
						required
					></input>
				</div>
				<div>
					<label>Dietary Restrictions</label>
					<input
						type='text'
						name='breakfast'
						value={values.breakfast}
						onChange={handleChange}
						placeholder='Tell us of any dietary restrictions.'
					></input>
				</div>
				<div>
					<label>Pay Full Amount Now?</label>
					<React.Fragment>
						<ToggleSwitch label='Payment' />
					</React.Fragment>
				</div>
				<div>
					<input type='submit' value='Book'></input>
				</div>
			</form>
		</div>
	);
};

export default CheckoutForm;
