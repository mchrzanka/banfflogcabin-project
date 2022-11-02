import React from 'react';
import useFetch from '../hooks/useFetch';
import Pricing from './../components/pricing/Pricing';

export default function Rates() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/ratespage'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div>
			<div className='heading1'>{data.data.attributes.h1}</div>

			<Pricing />
			<div className='content'>{data.data.attributes.content1}</div>
			<div className='heading2'>{data.data.attributes.h2}</div>
			<div className='content'>{data.data.attributes.content2}</div>
		</div>
	);
}
