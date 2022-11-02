import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function BookingTerms() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/termspage'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div>
			<div>
				<div className='heading1'>{data.data.attributes.h1}</div>
				<div className='content'>{data.data.attributes.term1}</div>
				<div className='content'>{data.data.attributes.term2}</div>
				<div className='content'>{data.data.attributes.term3}</div>
				<div className='content'>{data.data.attributes.term4}</div>
				<div className='content'>{data.data.attributes.term5}</div>
				<div className='content'>{data.data.attributes.term6}</div>
				<div className='content'>{data.data.attributes.term7}</div>
				<div className='content'>{data.data.attributes.term8}</div>
				<div className='content'>{data.data.attributes.term9}</div>
				<div className='heading2'>{data.data.attributes.h2}</div>
				<div className='content'>{data.data.attributes.canc1}</div>
				<div className='content'>{data.data.attributes.canc2}</div>
			</div>

			<a href='/booking' aria-label='book' className='tan wide-btn'>
				Continue
			</a>
		</div>
	);
}
