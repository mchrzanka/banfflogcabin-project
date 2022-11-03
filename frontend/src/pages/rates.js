import React from 'react';
import Ammenities from '../components/ammenities/Ammenities';
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
			<h1 className='heading1'>{data.data.attributes.h1}</h1>

			<Pricing />
			<p className='content'>{data.data.attributes.content1}</p>
			<h2 className='heading2'>{data.data.attributes.h2}</h2>
			<Ammenities/>
			<p className='content'>{data.data.attributes.content2}</p>
		</div>
	);
}
