import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../scss/components/_calendar.scss';

// Use onChange prop for getting new values.


const Calen = () => {

    const [value, onChange] = useState(new Date());
    const [myArray, updateMyArray] = useState([]);
    // //const [enoughDaysToBook, updateEnoughDaysToBook] = useState(false);
    // const enoughDaysToBookCurrent = this.enoughDaysToBook.current;
	

    const pushDayArray = (value) => {
        updateMyArray( arr => [...arr, `${value} #${arr.length}`]);
        if(myArray.length > 0){console.log('big');}  //updateEnoughDaysToBook(true)
    };

    const click = (value) => { 
        alert('New date is: ', value);
    };

    return (
        <div className='container'>
            <h1>Booking Calendar</h1>
            <Calendar onChange={onChange} 
            value={value} 
            onClickDay={(value, event) => {
                //alert(`Clicked day: ${value}`); 
                pushDayArray(value);
            }}
            />
            <p>Minimum booking is two days.</p>
            <h2>Dates Selected:</h2>
            {myArray.map( e => //THIS FORMATS THE DATE
            <p key={e}>{ e.split('00:')[0] }</p>)} 
        </div>
    );
};
export default Calen;



