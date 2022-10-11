import React, { Component } from 'react';

//handles capturing the input
import useForm from '../../hooks/useForm';

//form validation
import validateFormInfo from '../../validation/validateFormInfo';

import ToggleSwitch from '../buttons/ToggleSwitch';

const CheckoutForm = () => {
	const { handleChange, values, handleSubmit, errors } =
		useForm(validateFormInfo);

	return (
		<div>
			<div>
				<p>{{ ...values }.firstname}</p>
				<p>{{ ...values }.lastname}</p>
				<p>{{ ...values }.email}</p>
				<p>{{ ...values }.phone}</p>
				<p>{{ ...values }.breakfast}</p>
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
				<div>
					<input type='submit' value='Book' />
				</div>
			</form>
		</div>
	);
};

export default CheckoutForm;
