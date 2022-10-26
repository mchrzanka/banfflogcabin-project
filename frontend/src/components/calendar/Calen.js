// import React, { useState } from 'react';
// import DatePicker, {
// 	Calendar,
// 	getAllDatesInRange,
// } from 'react-multi-date-picker';
// import './calen.scss';
// import useFetch from '../../hooks/useFetch';
// export default function CalendarMain() {
// 	let [inputValue, setInputValue] = useState('');
// 	let [inputValue2, setInput2Value] = useState('');
// 	let [value, setValue] = useState([]);

// 	const { loading, error, data } = useFetch(
// 		'http://147.182.207.198:1337/api/calendardates'
// 	);

// 	if (loading) {
// 		return <p>Loading...</p>;
// 	} else if (error === []) {
// 		return <p>Error</p>;
// 	}

// 	return (
// 		<div className='CalendarMain'>
// 			<div>
// 				{data.data.map((datebooked) => (
// 					<div key={datebooked.id}>
// 						<div>
// 							<p>{datebooked.attributes.datebooked}</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>

// 			<Calendar
// 				multiple
// 				/**
// 				 * set "onlyShowInRangeDates" to false,
// 				 * if you want to see selected dates that
// 				 * are not in range of min and max date
// 				 */
// 				onlyShowInRangeDates={false}
// 				minDate={inputValue}
// 				maxDate={inputValue2}
// 				value={value}
// 				onChange={setValue}
// 			/>
// 		</div>
// 	);
// }
