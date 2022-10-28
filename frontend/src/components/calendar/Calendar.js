import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';


export default function Calendar() {

	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/calendardates'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div className='calendar'>
			<div>
				{data.data.map((datebooked) => (
					<div key={datebooked.id}>
						<div>
							<p>{datebooked.attributes.datebooked}</p>
						</div>
					</div>
				))}
			</div>
		</div>
			
	);
}
