import { useState, useEffect } from 'react';

const useForm = () => {
	//https://www.youtube.com/watch?v=O6P86uwfdR0
	const [values, setValues] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		breakfast: '',
		checkbox: 'fullPayCheck',
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
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return { handleChange, values, handleSubmit };
};

export default useForm;
