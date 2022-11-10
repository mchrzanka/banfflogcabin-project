//shortcut : rfc tab (creates a react functional component)
import React from 'react';
import Reviews from '../components/reviews/reviews';
import useFetch from '../hooks/useFetch';
import cabinsm from '../img/cabinsm.jpg';
import cabin from '../img/cabin.jpg';

export default function HomePage() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/homepage'
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
				<picture>
					<source media='(min-width:650px)' srcSet={cabin} />
					<img src={cabinsm} alt='Banff Log Cabin at twilight' />
				</picture>
				<a className='tan' href='/bookingterms'>
					Book Now
				</a>
				<div className='heading2'>{data.data.attributes.h21}</div>
				<div className='content'>{data.data.attributes.content1}</div>
				<div className='heading2'>{data.data.attributes.h22}</div>
				<div className='content'>{data.data.attributes.content2}</div>
				<a className='green' href='/rates'>
					Our Cabin
				</a>
				<div className='heading2'>{data.data.attributes.h23}</div>
				<div className='content'>{data.data.attributes.content3}</div>
			</div>
			<div>
				<h2>Reviews</h2>
				<Reviews />
			</div>
		</div>
	);
}
