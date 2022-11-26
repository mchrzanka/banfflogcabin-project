import React from 'react';
import useFetch from '../../hooks/useFetch';
import '../../scss/components/_history.scss'

export default function History() {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/ourhistories'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	return (
		<div className='history'>
				
					
			{data.data.map((ourhistory) => (	
				<div key={ourhistory.id}>
					<div className='heading1'>{ourhistory.attributes.h2}</div>
					<div className='history-year'>{ourhistory.attributes.year}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc}</div>
					<div className='history-year'>{ourhistory.attributes.year2}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc2}</div>
					<div className='history-year'>{ourhistory.attributes.year3}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc3}</div>
					<div className='history-year'>{ourhistory.attributes.year4}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc4}</div>
					<div className='history-year'>{ourhistory.attributes.year5}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc5}</div>
					<div className='history-year'>{ourhistory.attributes.year6}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc6}</div>
					<div className='history-year'>{ourhistory.attributes.year7}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc7}</div>
					<div className='history-year'>{ourhistory.attributes.year8}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc8}</div>
					<div className='history-year'>{ourhistory.attributes.year9}</div>
					<div className='history-desc'>{ourhistory.attributes.yearDesc9}</div>
				</div>
				
			))}

				
		</div>
	);
}
