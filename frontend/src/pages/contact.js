import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import useFetch from '../hooks/useFetch';
import Map from '../components/map/Map';

export default function Contact() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/contactuses'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div>
			<div>
				<div>
					{data.data.map((contactus) => (
						<div key={contactus.id}>
							<div className='heading1'>{contactus.attributes.h1}</div>
							<div className='content'>{contactus.attributes.content1}</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<ContactForm />
			</div>
			<div>
				<div>
					{data.data.map((contactus) => (
						<div key={contactus.id}>
							<div className='heading2'>{contactus.attributes.h2}</div>
							<div className='content'>{contactus.attributes.content2}</div>
						</div>
					))}
				</div>
			</div>
			<Map />
		</div>
	);
}
