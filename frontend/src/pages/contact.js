import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import useFetch from '../hooks/useFetch';
import Map from '../img/map-small.PNG';

import '../scss/pages/_contact.scss';
export default function Contact() {
	const { loading, error, data } = useFetch(
		'https://strapi-qzpr.onrender.com/api/contactpage'
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
						<div className='h1'>{data.data.attributes.h1}</div>
						<div className='content'>{data.data.attributes.content1}</div>
					</div>
				</div>
				<div className='form'>
					<ContactForm />
				</div>
			</div>
			<div className='find-map'>
				<div className='find-us'>
					<div className='h2'>{data.data.attributes.h2}</div>
					<div className='content'>{data.data.attributes.content2}</div>
				</div>
				<a
					href='https://www.google.com/maps/place/Banff+Log+Cabin+Guesthouse/@51.1683881,-115.5680137,17z/data=!3m1!4b1!4m9!3m8!1s0x5370ca39085478cb:0x8784453d730a821f!5m2!4m1!1i2!8m2!3d51.1683848!4d-115.565825!16s%2Fg%2F11f3f9y6vn'
					target='_blank'
					rel='noreferrer'
				>
					<div className='map-bg'></div>
				</a>
			</div>
		</div>
	);
}
