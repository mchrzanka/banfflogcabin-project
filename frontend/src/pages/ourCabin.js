import React from 'react';
import YoutubeVideo from '../components/youtube/Youtube';
import useFetch from '../hooks/useFetch';
import Gallery from '../components/gallery/gallery';
import Cabin from '../img/cabin-winter.jpg';

import '../scss/pages/_ourcabin.scss';

export default function OurCabin() {
	const { loading, error, data } = useFetch(
		'https://strapi-qzpr.onrender.com/api/ourcabinpage'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div className='ourcabin'>
			<div className='cabintopcontent'>
				<div className='title'>
					<h1 className='h1'>
						{data.data.attributes.h1} - the perfect getaway for two!
					</h1>
				</div>
				<div className='cabininfo'>
					<div className='first-div'>
						<img src={Cabin} alt='Banff log cabin in the winter so cozy' />
					</div>
					<div className='second-div'>
						<p className='content'>{data.data.attributes.content1}</p>
						<p className='content'>{data.data.attributes.content2}</p>
						<p className='content'>{data.data.attributes.content3}</p>
						<p className='content'>{data.data.attributes.content4}</p>
						<p className='content'>{data.data.attributes.content5}</p>
						<p className='content'>{data.data.attributes.content6}</p>
					</div>
				</div>

				<div className='youtube-vid'>
					<YoutubeVideo />
				</div>
			</div>
			<div className='quote-container'>
				<div className='quote'>
					<h1>{data.data.attributes.quote}</h1>
					<p className='quotename'>{data.data.attributes.quotename}</p>
				</div>
			</div>

			<Gallery />
		</div>
	);
}
