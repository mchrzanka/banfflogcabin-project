import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../scss/components/_calendar.scss';

// Use onChange prop for getting new values.


const Calen = () => {

    const [value, onChange] = useState(new Date());

    const [myArray, updateMyArray] = useState([]);

    const pushDayArray = (value) => {
        updateMyArray( arr => [...arr, `${value} #${arr.length}`]);
    };

    const click = (value) => { 
        alert('New date is: ', value);
    };

    return (
        <div className='container'>
            <h1>hii</h1>
            <Calendar onChange={onChange} 
            value={value} 
            onClickDay={(value, event) => {
                //alert(`Clicked day: ${value}`); 
                pushDayArray(value);
            }}
            />
            <h2>Dates Selected:</h2>
            {myArray.map( e =>
            <p>{ e }</p>)}
        </div>
    );
};
export default Calen;






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
