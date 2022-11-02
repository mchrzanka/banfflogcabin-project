export default function validateFormInfo(values) {
	let errors = {};

	//firstname
	if (!values.firstname) {
		errors.firstname = 'First name required';
	} else if (!/^[A-Za-z\s]+$/.test(values.firstname)) {
		errors.firstname = 'First name can only contain letters.';
	}
	//lastname
	if (!values.lastname) {
		errors.lastname = 'Last name required.';
	} else if (!/^[A-Za-z\s]+$/.test(values.lastname)) {
		errors.lastname = 'Last name can only contain letters.';
	}

	//email
	if (!values.email) {
		errors.email = 'Email required.';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Email address is invalid.';
	}

	if (!values.message) {
		errors.message = 'Message required.';
	}

	return errors;
}
