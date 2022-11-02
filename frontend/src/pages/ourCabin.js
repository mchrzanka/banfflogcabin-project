import React from 'react';
import useFetch from '../hooks/useFetch';
import Play from '../components/youtube/play';

export default function OurCabin() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/ourcabinpage'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div>
			<div>
				<div className='container'>
					<div className='heading1'>{data.data.attributes.h1}</div>
				</div>
				<div className='container'>
					<div className='content'>{data.data.attributes.content1}</div>
				</div>
				<div className='container'>
					<div className='quote'>{data.data.attributes.quote}</div>
				</div>
			</div>
			<Play />
		</div>
	);
}
