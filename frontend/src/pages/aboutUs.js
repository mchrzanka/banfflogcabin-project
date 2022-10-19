import React from 'react';
import useFetch from '../hooks/useFetch';
import History from '../components/history/History';

export default function AboutUs() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/abouts'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<main>
			<div>
				{data.data.map((about) => (
					<div key={about.id}>
						<div className='heading1'>{about.attributes.h1}</div>
						<div className='heading2'>{about.attributes.h2}</div>
						<div className='content'>{about.attributes.content1}</div>
						<div className='quote'>{about.attributes.quote}</div>
						<div className='content'>{about.attributes.content2}</div>
					</div>
				))}
			</div>
			<div>
				<History />
			</div>
		</main>
	);
}
