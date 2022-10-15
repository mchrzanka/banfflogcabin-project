//shortcut : rfc tab (creates a react functional component)
import React from 'react';
import useFetch from '../../hooks/useFetch';

const Reviews = () => {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/reviews'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		//since strapi update, the data is nested in attributes. So instead of putting {review.content}, you have to do {review.attributes.content}. There was also some issues with strapi passing data as an object now instead of as an array, so instead of data.map you have to do data.data.map, and make sure in useFetch.js the useState is [].
		<div>
			{data.data.map((review) => (
				<div key={review.id}>
					<div className='content'>{review.attributes.Content}</div>
					<div className='reviewer'>{review.attributes.Reviewer}</div>
				</div>
			))}
		</div>
	);
};

export default Reviews;
