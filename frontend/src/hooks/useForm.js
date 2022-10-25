import { useState, useEffect } from 'react';

import validateFormInfo from '../validation/validateFormInfo';

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

	const [errors, setErrors] = useState({});

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

	//stop form from refreshing on submit
	const handleSubmitValidation = (e) => {
		e.preventDefault();

		setErrors(validateFormInfo(values));
	};

	//sends an email using EmailJS from the contact form.
	//NEED TO FIGURE OUT .ENV VARIABLES
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.send('service_ar906mc', 'template_zb02dvw', values, 'CLGxzbssWzPEH6ONl');
	};

	return { handleChange, values, handleSubmitValidation, errors, sendEmail };
};

export default useForm;
