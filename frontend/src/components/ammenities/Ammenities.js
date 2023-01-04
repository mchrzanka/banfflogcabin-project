import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function Ammenities() {
	const { loading, error, data } = useFetch(
		'https://strapi-qzpr.onrender.com/api/ammenities'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div>
			{data.data.map((ammenities) => (
				<div key={ammenities.id}>
					<p>{ammenities.attributes.ammenity}</p>
				</div>
			))}
		</div>
	);
}
