import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Rates() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/rates'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<main>
			<div>
				{data.data.map((rate) => (
					<div key={rate.id}>
						<div className='heading1'>{rate.attributes.h1}</div>
						<div className='content'>{rate.attributes.content1}</div>
						<div className='heading2'>{rate.attributes.h2}</div>
						<div className='content'>{rate.attributes.content2}</div>
					</div>
				))}
			</div>
		</main>
	);
}
