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

	let successMessage = 'We have received your message and will be in touch shortly.';

	return (
		<div>
			<form className='booking-form' onSubmit={handleSubmitValidationContact}>
				
				<div className='first'>
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
				<div className='last'>
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
				<div className='email'>
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
				<div className='message'>
					<label>message</label>
					<textarea
						name='message'
						value={values.message}
						onChange={handleChange}
						placeholder='Message'
					/>
					{errors.message && <p>{errors.message}</p>}
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
				<p>{onSuccess == true ? successMessage : ''}</p>
			</form>
		</div>
	);
};

export default ContactForm;
