import React, { Component } from 'react';
import ToggleSwitch from '../ToggleSwitch';

//controlled component
export class CheckoutForm extends Component {
	constructor(props) {
		super(props);

		//we set the input as a state property, which is supplied as a value to the value attribute of the input element.
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			checkbox: 'fullPayCheck',
		};
	}

	//When there is a change, or a new value, that new value is propogated to handle the change, which sets the state property to the updated value. The new value is now available as a property.
	handleFirstnameChange = (event) => {
		this.setState({
			firstname: event.target.value,
		});
	};

	handleLastnameChange = (event) => {
		this.setState({
			lastname: event.target.value,
		});
	};

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value,
		});
	};

	handlePhoneChange = (event) => {
		this.setState({
			phone: event.target.value,
		});
	};

	handleSubmit = (event) => {
		alert(
			`${this.state.firstname} ${this.state.lastname} ${this.state.email} ${this.state.phone}`
		);
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>First Name</label>
						<input
							type='text'
							value={this.state.firstname}
							onChange={this.handleFirstnameChange}
							placeholder='Jane'
							required
						></input>
					</div>
					<div>
						<label>Last Name</label>
						<input
							type='text'
							value={this.state.lastname}
							onChange={this.handleLastnameChange}
							placeholder='Doe'
							required
						></input>
					</div>
					<div>
						<label>Email</label>
						<input
							type='email'
							value={this.state.email}
							onChange={this.handleEmailChange}
							placeholder='email@address.com'
							required
						></input>
					</div>
					<div>
						<label>Phone No.</label>
						<input
							type='tel'
							value={this.state.phone}
							onChange={this.handlePhoneChange}
							placeholder='888-888-8888'
							required
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
	}
}

export default CheckoutForm;
