import React from 'react';
import useFetch from '../hooks/useFetch';
import History from '../components/history/History';
import '../scss/pages/_aboutus.scss';



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
		<div className="about-us">
			<div>
				<div className='heading1'>{data.data.attributes.h1}</div>
				<div className="flex-con">
					<div className='heading-con'>
						<div className='heading2'>{data.data.attributes.h2}</div>
						<div className='content'>{data.data.attributes.content1}</div>						
					</div>
					<div className='large-con'>
						<div className='larger-text'>{data.data.attributes.quote}</div>
					</div>
					<div className='last-con'>
						<div className='content'>{data.data.attributes.content2}</div>					
						<div className='content'>{data.data.attributes.content3}</div>
						<div className='content'>{data.data.attributes.content4}</div>
					</div>
				
				</div>
			</div>
			<div>
				<History />
			</div>
		</div>
	);
}
