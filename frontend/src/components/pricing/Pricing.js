import React from 'react';
import useFetch from '../../hooks/useFetch';

const Pricing = () => {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/pricings'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		//since strapi update, the data is nested in attributes. So instead of putting {review.content}, you have to do {review.attributes.content}. There was also some issues with strapi passing data as an object now instead of as an array, so instead of data.map you have to do data.data.map, and make sure in useFetch.js the useState is [].
		<div>
			{data.data.map((pricing) => (
				<div key={pricing.id}>
					<div>{pricing.attributes.season}</div>
                    <div>{pricing.attributes.startdate} - {pricing.attributes.enddate}</div>
                    <div>${pricing.attributes.price}</div>
				</div>
			))}
		</div>
	);
};

export default Pricing;