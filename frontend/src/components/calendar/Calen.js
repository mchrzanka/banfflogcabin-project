import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../scss/components/_calendar.scss';

// Use onChange prop for getting new values.


const Calen = () => {

    const [value, onChange] = useState(undefined);
    const [myArray, updateMyArray] = useState([]);
    // //const [enoughDaysToBook, updateEnoughDaysToBook] = useState(false);
    // const enoughDaysToBookCurrent = this.enoughDaysToBook.current;
	

    const pushDayArray = (value) => {  

        updateMyArray( 
            arr => [...arr, `${value} #${arr.length}`]);

        if(myArray.length > 0){console.log('enough days');}  //updateEnoughDaysToBook(true)
    };

    const click = (value) => { 
        alert('New date is: ', value);
    };

    return (
        <div className='container'>
            <h1>Booking Calendar</h1>
            <Calendar onChange={onChange} 
            //defaultValue={undefined}
            value={value} 
            selectRange={true}
            
            onClickDay={(value, event) => {
                //alert(`Clicked day: ${value}`); 
                pushDayArray(value);
            }}
            />
            <p>Minimum booking is two days.</p>
            <h2>Dates Selected:</h2>
            
            {/* THIS FORMATS THE DATE */}
            <div>
                {myArray.length > 0 && <p>{myArray[0].split('00:')[0]} to  {myArray.length > 1 && myArray[1].split('00:')[0]}</p>}
            </div>
        </div>
    );
};
export default Calen;



