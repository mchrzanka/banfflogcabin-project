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

	if (!values.phone) {
		errors.phone = 'Phone number required.';
	} else if (
		!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
			values.phone
		)
	) {
		// valid formats:
		// (123) 456-7890
		// (123)456-7890
		// 123-456-7890
		// 123.456.7890
		// 1234567890
		// +31636363634
		// 075-63546725
		errors.phone = 'Phone number is invalid.';
	} else if (values.phone.length < 10 || values.phone.length > 20) {
		errors.phone = 'Phone number must be between 10 to 20 numbers.';
	}

	if (!values.message) {
		errors.message = 'Message required.';
	}

	return errors;
}
