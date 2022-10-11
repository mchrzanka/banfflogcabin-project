import React from 'react';
import '../../css/ToggleSwitch.css';

const ToggleSwitch = ({ label }) => {
	return (
		<div className='container'>
			<div className='toggle-switch'>
				<input
					type='checkbox'
					className='checkbox'
					value='fullPayCheck'
					name={label}
					id={label}
				/>
				<label className='label' htmlFor={label}>
					<span className='inner' />
					<span className='switch' />
				</label>
			</div>
		</div>
	);
};

export default ToggleSwitch;
