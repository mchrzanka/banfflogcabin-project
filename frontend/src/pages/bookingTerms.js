import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function BookingTerms() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/bookingpages'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div>
			<div>
				{data.data.map((bookingpage) => (
					<div key={bookingpage.id}>
						<div className='heading1'>{bookingpage.attributes.h1}</div>
						<div className='content'>{bookingpage.attributes.content1}</div>
						<div className='heading2'>{bookingpage.attributes.h2}</div>
						<div className='content'>{bookingpage.attributes.content2}</div>
					</div>
				))}
			</div>
		</div>
	);
}
