import React from 'react';

//npm install react-router-dom
import { Link } from 'react-router-dom';

export default function SiteHeader() {
	return (
		<div className='site-header'>
			<Link to='/'>
				<h1>header</h1>
			</Link>
		</div>
	);
}
