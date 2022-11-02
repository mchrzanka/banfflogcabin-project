import React from 'react';
import useFetch from '../hooks/useFetch';
import History from '../components/history/History';

export default function AboutUs() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/aboutpage'
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
				<div className='heading2'>{data.data.attributes.h2}</div>
				<div className='content'>{data.data.attributes.content1}</div>
				<div className='larger-text'>{data.data.attributes.quote}</div>
				<div className='content'>{data.data.attributes.content2}</div>
			</div>
			<div>
				<History />
			</div>
		</div>
	);
}
