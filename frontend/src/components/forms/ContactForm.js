import React from 'react';

//handles capturing the input
import useForm from '../../hooks/useForm';

//form validation
import validateFormInfo from '../../validation/validateFormInfo';

const ContactForm = () => {
	const { handleChange, values, handleSubmitValidation, errors } =
		useForm(validateFormInfo);

	return (
		<div>
			<div>
				<p>{{ ...values }.firstname}</p>
				<p>{{ ...values }.lastname}</p>
				<p>{{ ...values }.email}</p>
				<p>{{ ...values }.message}</p>
				<p>
					If you have any questions, please don't hesitate to reach out. You can
					send us an email by filling in the form below.
				</p>
			</div>
			<form className='booking-form' onSubmit={handleSubmitValidation}>
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
					<label></label>
					<textarea
						name='message'
						value={values.message}
						onChange={handleChange}
						placeholder='Message'
					/>
					{errors.message && <p>{errors.message}</p>}
				</div>
				<div>
					<input type='submit' value='Submit' name='contact' />
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
