import React from 'react';

//npm install react-router-dom
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className='site-footer'>
			<Link to='/'>
				<h1>footer</h1>
			</Link>
		</div>
	);
}
