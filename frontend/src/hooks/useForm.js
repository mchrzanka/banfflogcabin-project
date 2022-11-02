import { useState, useEffect } from 'react';

import validateFormInfo from '../validation/validateBookingForm';

import emailjs from '@emailjs/browser';

const useForm = () => {
	//https://www.youtube.com/watch?v=O6P86uwfdR0
	const [values, setValues] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		breakfast: '',
		message: '',
	});

	//in setState, the first thing is always the current state, and the second thing is the function that allows us to update the current state.

	const [errors, setErrors] = useState({});
	const [onSuccess, setOnSuccess] = useState(false);

	//this function runs after the Submit button is clicked. It updates the state to true, which is then passed to the contactform, which then uses the true state to display the success message.
	const success = () => {
		setOnSuccess((current) => !current);
	};

	useEffect(() => {}, [onSuccess]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			//destructuring the values object
			...values,
			//target the name of each input (ex "email")
			//[e.target.name]:e.target.value;
			[name]: value,
		});
	};

	const handleSubmitValidation = (e) => {
		e.preventDefault();

		setErrors(validateFormInfo(values));
	};

	const handleSubmitValidationContact = (e) => {
		e.preventDefault();

		setErrors(validateFormInfo(values));

		let isError = false;

		//firstname
		if (!values.firstname) {
			errors.firstname = 'First name required';
			isError = true;
		} else if (!/^[A-Za-z\s]+$/.test(values.firstname)) {
			errors.firstname = 'First name can only contain letters.';
			isError = true;
		}
		//lastname
		if (!values.lastname) {
			errors.lastname = 'Last name required.';
			isError = true;
		} else if (!/^[A-Za-z\s]+$/.test(values.lastname)) {
			errors.lastname = 'Last name can only contain letters.';
			isError = true;
		}

		//email
		if (!values.email) {
			errors.email = 'Email required.';
			isError = true;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'Email address is invalid.';
			isError = true;
		}

		if (!values.message) {
			errors.message = 'Message required.';
			isError = true;
		}

		if (isError == false) {
			emailjs
				.send(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
					values,
					process.env.REACT_APP_EMAILJS_USER_ID
				)
				.then((resp) => {
					// it worked
					success();
				})
				.catch((err) => {
					console.log('Mail not sent');
					console.log(err.message);
				});
		}
	};

	return {
		handleChange,
		values,
		handleSubmitValidation,
		handleSubmitValidationContact,
		errors,
		onSuccess,
	};
};

export default useForm;
