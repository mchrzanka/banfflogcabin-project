//shortcut : rfc tab (creates a react functional component)
import React from 'react';
import Reviews from '../components/reviews/reviews';
import Play from '../components/youtube/play';
import useFetch from '../hooks/useFetch';
import cabinsm from '../img/cabinsm.jpg';
import cabin from '../img/cabin.jpg';

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
		<div>
			<div>
				{data.data.map((home) => (
					<div key={home.id}>
						<div className='heading1'>{home.attributes.h1}</div>
						<picture>
							<source media="(min-width:650px)" srcSet={cabin} />
							<img src={cabinsm} alt="Flowers" />
						</picture>
						<a className='tan' href='/booking'>Book Now</a>
						<div className='heading2'>{home.attributes.h21}</div>
						<div className='content'>{home.attributes.content1}</div>
						<div className='heading2'>{home.attributes.h22}</div>
						<div className='content'>{home.attributes.content2}</div>
						<a className='green' href='/rates'>Our Cabin</a>
						<div className='heading2'>{home.attributes.h23}</div>
						<div className='content'>{home.attributes.content3}</div>
					</div>
				))}
			</div>
			<div><Play/></div>
			<div>
				<h2>Reviews</h2>
				<Reviews />
			</div>
		</div>
	);
}
