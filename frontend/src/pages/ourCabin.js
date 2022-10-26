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
		<div>
			<div>
				{data.data.map((ourcabin) => (
					<div key={ourcabin.id}>
						<div className="container">
						    <div className='heading1'>{ourcabin.attributes.h1}</div>
						</div>
						<div className="container">
						    <div className='content'>{ourcabin.attributes.content}</div>
						</div>
						<div className="container">
						    <div className='quote'>{ourcabin.attributes.quote}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
