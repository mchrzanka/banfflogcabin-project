import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../scss/components/_calendar.scss';
import { differenceInCalendarDays } from 'date-fns';
import useFetch from '../../hooks/useFetch';
import Price from '../../hooks/usePrice';
import StripeContainer from '../stripe/StripeContainer';

const Calen = () => {
	const [value, onChange] = useState(undefined);
	const [myArray, updateMyArray] = useState([]);
	const [click, setClick] = useState(false);
	const [showItem, setShowItem] = useState(false);
	const date = new Date();
	let depositPrice = 0;

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

	//PRICE LOGIC WILL GO HERE
	//bringing an array of the season objects with the name, startdate, enddate, and price.
	const seasonPricingInfo = Price();
	//console.log(seasonPricingInfo);

	if (diffDays > 2) {
		if (click == true) {

			//getting the dates in between based on the first and last day, and pushing them into the chosenDays array.
			chosenDays.push(firstDay.toISOString());

			for (let i = 0; i < diffDays - 1; i++) {
				firstDay.setDate(firstDay.getDate() + 1);
				chosenDays.push('' + firstDay.toISOString());

			}
			//this does math for the deposit price, need to pass depositPrice variable into stripe
			const depositPerNight = 150;

			depositPrice = depositPerNight * diffDays;
			//console.log(depositPrice);





			//AZURE

			let totalPrice = 0;

			for (let i = 0; i < seasonPricingInfo.length; i++) { //loop thru each season
				console.log(seasonPricingInfo[i].name);
				// console.log(seasonPricingInfo[i].Start);
				// console.log(seasonPricingInfo[i].End);
				console.log(seasonPricingInfo[i].Price);
				//console.log(chosenDays[i]);
				// if (chosenDays[i] !== undefined) {
				let startMonth = parseInt(seasonPricingInfo[i].Start.substr(5, 2));
				let endMonth = parseInt(seasonPricingInfo[i].End.substr(5, 2));
				let startDay = parseInt(seasonPricingInfo[i].Start.substr(8, 2));
				let endDay = parseInt(seasonPricingInfo[i].End.substr(8, 2));
				console.log("STARTMONTH",startMonth);
				console.log("ENDDAY",endDay);
				// } //PER DAY
				for (let j = 0; j < chosenDays.length; j++) { //loop thru each day
					let month = parseInt(chosenDays[j].substr(5, 2));
					let day = parseInt(chosenDays[j].substr(8, 2));
					console.log(month);
					console.log(day);
					if (month > startMonth && month < endMonth){
						totalPrice += seasonPricingInfo[i].Price;
					} 
					else {
						if ( (month === startMonth && day > startDay) ||  (month === endMonth && day < endDay)){
							totalPrice += seasonPricingInfo[i].Price;
						}
					}
				}
			}
			totalPrice *= 1.05; //tax
			totalPrice *= 1.03; //fee
			totalPrice = Math.round(totalPrice);
			console.log("price",totalPrice);
			//IF CHOSENDAYS.LENGTH > 2





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
		<div className='calendar-content'>
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
				<p className='min-booking'>** No babies, no minors, no pets. Sorry.</p>
				<div className='button'>
					<a className='secondary-btn btn' href='#' onClick={handleClick}>
						Select Dates
					</a>
				</div>
			</div>
			<div
				className={
					click == true && diffDays > 2 ? 'datesSelected show' : 'datesSelected'
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
					<p>Deposit Price: ${depositPrice}.00</p>
					<p>Total Price:</p>


					<div>
						{showItem ? (
							<div>
								<StripeContainer />
							</div>
						) : (
							<>
								{' '}
								<button className='tan' onClick={() => { console.log(Calen.data); setShowItem(true); }}>Continue</button>

							</>
						)}
					</div>

				</div>
			</div>
		</div>
	);
};
export default Calen;
