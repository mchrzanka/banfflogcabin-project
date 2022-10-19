import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import useFetch from '../hooks/useFetch';

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
			<div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10006.077652491755!2d-115.56883909756138!3d51.17264890698571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370ca39085478cb%3A0x8784453d730a821f!2sBanff%20Log%20Cabin%20Guesthouse!5e0!3m2!1sen!2sca!4v1666039017911!5m2!1sen!2sca'
					style={{ width: 600, height: 800 }}
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</div>
	);
}
