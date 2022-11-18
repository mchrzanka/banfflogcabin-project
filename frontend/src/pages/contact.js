import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import useFetch from '../hooks/useFetch';
import Map from '../components/map/Map';

import '../scss/pages/_contact.scss';
export default function Contact() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/contactpage'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div className='contact'>
			<div className='flex-con'>
				<div className='intro'>
					<div>
						<div className='heading1'>{data.data.attributes.h1}</div>
						<div className='content'>{data.data.attributes.content1}</div>
					</div>
				</div>
				<div className='form'>
					<ContactForm />
				</div>
			</div>
			<div className='find-map'>
				<div className='find-us'>
					<div className='find-pad'>
						<div className='heading2'>{data.data.attributes.h2}</div>
						<div className='content'>{data.data.attributes.content2}</div>
					</div>
				</div>
				<div className='map'>
					<Map />
				</div>
			</div>
		</div>
	);
}
