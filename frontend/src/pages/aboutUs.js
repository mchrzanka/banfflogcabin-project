import React from 'react';
import useFetch from '../hooks/useFetch';
import History from '../components/history/History';
import '../scss/pages/_aboutus.scss';

import aboutmedium from '.././img/about-medium.jpg';
import aboutmobile from '.././img/about-mobile.jpg';
import hostdesktop from '.././img/host-desktop.jpg';
import hostmobile from '.././img/host-mobile.jpg';
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
				<div className="banner-about">
					<div className="banner-desktop">
						<img src={hostdesktop} alt="banner"></img>
					</div>
					<div className="banner-mobile">
						<img src={hostmobile} alt="banner"></img>
					</div>
					<div className="heading-content">
						<div className='heading1'>{data.data.attributes.h1}</div>
						<div className='content'>{data.data.attributes.content1}</div>
					</div>
				</div>

				<div className="flex-con">
					<div>
						<div className='heading2'>{data.data.attributes.h2}</div>

						<div className='content'>{data.data.attributes.content2}</div>
						<div className='content'>{data.data.attributes.content3}</div>
						<div className='content'>{data.data.attributes.content4}</div>
					</div>
					<div className='quote'>
						<div>{data.data.attributes.quote}</div>
					</div>

				</div>
			</div>

			<div className='our-history'>
				<div className="history-desktop">
					<img src={aboutmedium} alt="banner"></img>
				</div>

				<div className="history-mobile">
					<img src={aboutmobile} alt="banner"></img>
				</div>


				{/* HEY JEHAN this is the text that should be beside the img */}
				<div className='content'>{data.data.attributes.content5}</div>

				<History />
			</div>
		</div>
	);
}
