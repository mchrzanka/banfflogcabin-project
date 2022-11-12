import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../scss/components/_calendar.scss';
import { differenceInCalendarDays } from 'date-fns';
import useFetch from '../../hooks/useFetch';

const Calen = () => {
	const [value, onChange] = useState(undefined);
	const [myArray, updateMyArray] = useState([]);
	const [click, setClick] = useState(false);
	const date = new Date();

	//handles the select dates button. If the button is clicked, it will == true and the Dates Selected and calculated price will show.
	const handleClick = () => setClick(!click);

	//GRABBING BOOKED DATES FROM STRAPI
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/bookings'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	function numOfDays(firstDay, lastDay) {
		const diffTime = Math.abs(lastDay - firstDay);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) + 1);
		pushCustChosenDays(diffDays);
		return diffDays;
	}

	const firstDateDisplay = (myArray) => {
		//console.log("firstDateDisplay" + myArray); the first day they click on
		return myArray.length > 0 ? true : false;
	};

	const secondDateDisplay = (myArray) => {
		//console.log("secondDateDisplay" + myArray); //the end day they click on
		return myArray.length === 2 ? true : false;
	};

	const pushDayArray = (value) => {
		if (myArray.length < 2) {
			//MODULUS 2 DATE ARRAY NEVER GETS BIG
			updateMyArray((arr) => [...arr, `${value} #${arr.length}`]);
		} else {
			updateMyArray((arr) => [`${value} #${'1'}`]);
		}
	};

	const all_disabled_dates = [
		'2023-03-24',
		'2022-12-30',
		'2022-11-05',
		'2022-10-20',
	];
	const alleventDates = new Date(all_disabled_dates);
	const highlightedDates = all_disabled_dates.map(
		(dateString) => new Date(dateString)
	);

	function isSameDay(a, b) {
		return differenceInCalendarDays(a, b) === 0;
	}

	function disableDates({ date, view }) {
		if (
			view === 'month' &&
			highlightedDates.find((dDate) => isSameDay(dDate, date))
		) {
			// Or: return "highlight background";
			//   console.log(highlightedDates)
			return true;
		} else return false;
	}

	//THE START OF THE MATH FOR PRICING

	//calculates how many days a person has chosen from the booking calendar
	let firstDay = new Date(myArray[0]);
	const lastDay = new Date(myArray[1]);
	//sets the first day in the array
	const chosenDays = [myArray[0]];
	numOfDays(firstDay, lastDay);

	//getting the dates in between based on the first and last day, and pushing them into the chosenDays array.
	function pushCustChosenDays(diffDays) {
		for (let i = 0; i < diffDays - 1; i++) {
			firstDay.setDate(firstDay.getDate() + 1);
			chosenDays.push('' + firstDay);
		}
	}

	//PUTTING THE BOOKED DATES FROM STRAPI INTO AN ARRAY
	// const strapiBookedDateStart = [data.data[0].attributes.dateStart];
	// const bookedDateStart = new Date(strapiBookedDateStart);
	// console.log('Initial date start: ' + bookedDateStart);

	const strapiAllBookingData = [data.data];

	for (let i = 0; i < strapiAllBookingData.length + 1; i++) {
		const strapiBookings = strapiAllBookingData[0][i];

		console.log(strapiBookings);
	}

	// {data.data.map((bookings) => (
	//   <div key={bookings.id}>
	//     <p>Date Start: {bookings.attributes.dateStart}</p>
	//     <p>Date End: {bookings.attributes.dateEnd}</p>)

	// const strapiBookedDateEnd = [data.data[0].attributes.dateEnd];
	// const bookedDateEnd = new Date(strapiBookedDateEnd);
	// console.log('Initial date end: ' + bookedDateEnd);

	// bookedDateStart.setDate(bookedDateStart.getDate() + 1);

	// console.log('The next day: ' + bookedDateStart);

	// const date1 = bookedDateStart;
	// const date2 = bookedDateEnd;
	// const diffTime = Math.abs(date2 - date1);
	// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	// console.log(diffDays + 1 + ' total booked days');
	// console.log(diffDays + ' = number of days to loop through');

	// //the array
	// const strapiBookedDates = [
	// 	data.data[0].attributes.dateStart,
	// 	data.data[0].attributes.dateEnd,
	// ];

	// const tileDisabled = ({ activeStartDate, date, view }) => {
	//     if(date == 'Fri Nov 18 2022 00:00:00 GMT-0700 (Mountain Standard Time)')
	//     return true;
	//  }

	// if (diffDays > 2) {
	// 	if (click == true) {
	// 		//console.log("MEGA CLICK");
	// 	}
	// }

	return (
		<div className='container'>
			<h1>Select Your Dates</h1>
			<p>Dates from Strapi for disabling:</p>
			{data.data.map((bookings) => (
				<div key={bookings.id}>
					<p>Date Start: {bookings.attributes.dateStart}</p>
					<p>Date End: {bookings.attributes.dateEnd}</p>
				</div>
			))}

			<Calendar
				onChange={onChange}
				//defaultValue={undefined}
				value={value}
				tileDisabled={disableDates}
				// disableDates={}

				selectRange={true}
				minDate={date}
				onClickDay={(value, event) => {
					//alert(`Clicked day: ${value}`);
					pushDayArray(value);
				}}
			/>

			<p>* Minimum booking is two days.</p>

			<input
				onClick={handleClick}
				type='submit'
				value='Select Days'
				name='selectDays'
				className='green'
			/>

			<div
			// className={
			// 	click == true && diffDays > 2 ? 'datesSelected show' : 'datesSelected'
			// }
			>
				<h2>Dates Selected:</h2>
				<div>
					{firstDateDisplay(myArray) === true ? ( //DISPLAY FIRST & SECOND DATE SELECTED IF EXIST
						<p>{myArray[0].split('00:')[0] + ' - '}</p>
					) : (
						''
					)}
					{secondDateDisplay(myArray) === true ? (
						<p>{myArray[1].split('00:')[0]}</p>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};
export default Calen;
