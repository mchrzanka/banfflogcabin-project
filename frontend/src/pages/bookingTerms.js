import React from 'react';
import useFetch from '../hooks/useFetch';

import '../scss/pages/_bookingterm.scss';
export default function BookingTerms() {
	const { loading, error, data } = useFetch(
		'https://strapi-qzpr.onrender.com/api/termspage'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div className='booking-term'>
			<div className='booking'>
				<div className='content-con'>
					<div className='h1'>{data.data.attributes.h1}</div>
					<div className='content'>{data.data.attributes.term1}</div>
					<div className='content'>{data.data.attributes.term2}</div>
					<div className='content'>{data.data.attributes.term3}</div>
					<div className='content'>{data.data.attributes.term4}</div>
					<div className='content'>{data.data.attributes.term5}</div>
					<div className='content'>{data.data.attributes.term6}</div>
					<div className='content'>{data.data.attributes.term7}</div>
					<div className='content'>{data.data.attributes.term8}</div>
					<div className='content'>{data.data.attributes.term9}</div>
				</div>
			</div>

			<div className='button'>
				<a className='primary-btn btn' href='/booking'>
					Continue To Booking
				</a>
			</div>

			<div className='policy'>
				<div className='content-con'>
					<div className='h2'>{data.data.attributes.h2}</div>
					<div className='content'>{data.data.attributes.canc1}</div>
					<div className='content'>{data.data.attributes.canc2}</div>
				</div>
			</div>
		</div>
	);
}
