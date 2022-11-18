//shortcut : rfc tab (creates a react functional component)
import React from 'react';
import useFetch from '../../hooks/useFetch';
import '../../scss/components/_reviews.scss'

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
		<div className='flex-800 container'>
			{data.data.map((review) => (
				<div key={review.id} className='reviews '>
					<div className='content'>
						<div>{review.attributes.Content}</div>
						<div className='reviewer'>{review.attributes.Reviewer}</div>
					</div>

				</div>
			))}
		</div>
	);
};

export default Reviews;
