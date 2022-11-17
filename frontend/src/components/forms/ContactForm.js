import React from 'react';

//handles capturing the input
import useForm from '../../hooks/useForm';

//form validation
import validateFormInfo from '../../validation/validateBookingForm';

const ContactForm = () => {
	const {
		handleChange,
		values,
		handleSubmitValidationContact,
		errors,
		onSuccess,
	} = useForm(validateFormInfo);

	let successMessage =
		'We have received your message and will be in touch shortly.';

	return (
		<div>
			<form className='booking-form' onSubmit={handleSubmitValidationContact}>
				<div className='first'>
					<label>Your Name</label>
					<input
						type='text'
						name='firstname'
						value={values.firstname}
						onChange={handleChange}
						placeholder='Jane Doe'
					/>
					{errors.firstname && <p className='errors'>{errors.firstname}</p>}
				</div>
				<div className='email'>
					<label>Email</label>
					<input
						type='text'
						name='email'
						value={values.email}
						onChange={handleChange}
						placeholder='email@address.com'
					/>
					{errors.email && <p className='errors'>{errors.email}</p>}
				</div>
				<div className='message'>
					<label>Message</label>
					<textarea
						name='message'
						value={values.message}
						onChange={handleChange}
						placeholder='Message'
					/>
					{errors.message && <p className='errors'>{errors.message}</p>}
				</div>
				<div className='button'>
					<input
						//onClick={sendEmail}
						type='submit'
						value='Submit'
						name='contact'
						className='green'
					/>
				</div>
				<p>{onSuccess === true ? successMessage : ''}</p>
			</form>
		</div>
	);
};

export default ContactForm;
