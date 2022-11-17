import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../scss/components/_calendar.scss';
import { differenceInCalendarDays } from 'date-fns';
import useFetch from '../../hooks/useFetch';
import Price from '../../hooks/usePrice';

const Calen = () => {
	const [value, onChange] = useState(undefined);
	const [myArray, updateMyArray] = useState([]);
	const [click, setClick] = useState(false);
	const date = new Date();

	//CALENDAR FUNCTIONALITY
	const firstDateDisplay = (myArray) => {
		//console.log("firstDateDisplay" + myArray); the first day they click on
		return myArray.length > 0 ? true : false;
	};

	const secondDateDisplay = (myArray) => {
		//console.log("secondDateDisplay" + myArray); //the end day they click on
		return myArray.length === 2 ? true : false;
	};

	const pushDayArray = (value, diffDays) => {
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
		//console.log(booked[1]);
		if (view === 'month') {
			//console.log(date.toISOString());
			date = date.toISOString();
			date = date.substr(0, 10);
			for (let i = 0; i < booked.length - 1; i++) {
				booked[i] = booked[i].substr(0, 10);
				if (date == booked[i]) {
					//console.log("YESS");
					return true;
				}
			}
		}
		return false;
	}

	/***
	 *
	 *
	 *
	 *
	 *
	 *
	 *
	 *
	 *
	 */

	//handles the "Select Dates" button. If the button is clicked, it will == true and the Dates Selected and calculated price will show.
	const handleClick = () => setClick(!click);

	//THE START OF THE MATH FOR PRICING
	//calculates how many days a person has chosen from the booking calendar
	const chosenDays = [];
	let firstDay = new Date(myArray[0]);
	let lastDay = new Date(myArray[1]);

	//math for figuring out the # of inbetween days
	const diffTime = Math.abs(lastDay - firstDay);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) + 1);

	//getting the dates in between based on the first and last day, and pushing them into the chosenDays array.
	function pushCustChosenDays(diffDays) {
		chosenDays.push(firstDay.toISOString());
		for (let i = 0; i < diffDays - 1; i++) {
			firstDay.setDate(firstDay.getDate() + 1);
			chosenDays.push('' + firstDay.toISOString());
			//console.log(chosenDays);
		}
	}

	//PRICE LOGIC WILL GO HERE
	//bringing an array of the season objects with the name, startdate, enddate, and price.
	const seasonPricingInfo = Price();
	console.log(seasonPricingInfo);

	if (diffDays > 2) {
		if (click == true) {
			pushCustChosenDays(diffDays);
			//console.log("Ready to give you a PRICE!");
		}
	}

	/**
	 *
	 *
	 *
	 *
	 *
	 *
	 *
	 */

	//PUTTING THE BOOKED DATES FROM STRAPI INTO AN ARRAY
	//GRABBING BOOKED DATES FROM STRAPI
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/bookings'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}

	let strapiAllBookingData = [data.data];
	strapiAllBookingData = strapiAllBookingData[0];
	//console.log(strapiAllBookingData.length)
	const booked = [];

	for (let i = 0; i < strapiAllBookingData.length; i++) {
		const strapiBookings = strapiAllBookingData[i].attributes;
		//console.log(strapiBookings);
		//strapiBookings is the bookings in objects

		let startDateOfBooking = strapiBookings.dateStart;
		let endDateOfBooking = strapiBookings.dateEnd;

		//console.log(startDateOfBooking);
		startDateOfBooking = new Date(startDateOfBooking);
		endDateOfBooking = new Date(endDateOfBooking);

		booked.push('' + startDateOfBooking.toISOString());

		//math for figuring out the # of inbetween days
		const timeDiff = Math.abs(endDateOfBooking - startDateOfBooking);
		const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24) + 1);

		//console.log('Booking # ' + [i] + ' ' + 'Days booked: ' + dayDiff);

		for (let i = 0; i < dayDiff - 1; i++) {
			startDateOfBooking.setDate(startDateOfBooking.getDate() + 1);
			booked.push('' + startDateOfBooking.toISOString());
			//console.log(booked);
		}
	}

	return (
		<div class='calendar-content'>
			<div className='container'>
				<h1>Select Your Dates</h1>
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
				<p className='min-booking'>* Minimum booking is two nights.</p>
				<div className='button'>
					<a className='secondary-btn btn' href='#' onClick={handleClick}>
						Select Dates
					</a>
				</div>
				<div
					className={
						click == true && diffDays > 2
							? 'datesSelected show'
							: 'datesSelected'
					}
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
		</div>
	);
};
export default Calen;
