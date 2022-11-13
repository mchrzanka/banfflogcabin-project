import React from 'react';
import useFetch from '../hooks/useFetch';
import Play from '../components/youtube/play';
import Gallery from '../components/gallery/gallery';

import '../scss/pages/_ourcabin.scss';

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
		<div className='ourcabin'>
			<div>
				<div className='title'>
					<h1 className='heading1 container'>{data.data.attributes.h1}</h1>
				</div>
				<div className='container content'>
					<div className='content-flex'>
						<div className='col-1'>
							<p className='content'>{data.data.attributes.content1}</p>
							<p className='content'>{data.data.attributes.content2}</p>
							<p className='content'>{data.data.attributes.content3}</p>
						</div>
						<div className='col-2'>
							<p className='content'>{data.data.attributes.content4}</p>
							<p className='content'>{data.data.attributes.content5}</p>
							<p className='content'>{data.data.attributes.content6}</p>
						</div>
					</div>




				</div>

				<div className='youtube-vid'>
					<Play />
				</div>
			</div>
			<div className='quote-container'>
				<div className='quote'>
					<div>{data.data.attributes.quote}</div>
					<p className='quotename'>{data.data.attributes.quotename}</p>
				</div>
			</div>

			<Gallery />

		</div >
	);
}
