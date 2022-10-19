import React from 'react';
import useFetch from '../hooks/useFetch';

export default function OurCabin() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/ourcabins'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<main>
			<div>
				{data.data.map((ourcabin) => (
					<div key={ourcabin.id}>
						<div className='heading1'>{ourcabin.attributes.h1}</div>
						<div className='content'>{ourcabin.attributes.content}</div>
						<div className='quote'>{ourcabin.attributes.quote}</div>
					</div>
				))}
			</div>
		</main>
	);
}
