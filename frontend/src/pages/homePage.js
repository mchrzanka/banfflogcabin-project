//shortcut : rfc tab (creates a react functional component)
import React from 'react';
import Reviews from '../components/reviews/reviews';
import useFetch from '../hooks/useFetch';

export default function HomePage() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/homes'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<main>
			<div>
				{data.data.map((home) => (
					<div key={home.id}>
						<div className='heading1'>{home.attributes.h1}</div>
						<div className='heading2'>{home.attributes.h21}</div>
						<div className='content'>{home.attributes.content1}</div>
						<div className='heading2'>{home.attributes.h22}</div>
						<div className='content'>{home.attributes.content2}</div>
					</div>
				))}
			</div>
			<div>
				<h2>Reviews</h2>
				<Reviews />
			</div>
		</main>
	);
}
