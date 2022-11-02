import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../scss/components/_calendar.scss';


const Calen = () => {

    const [value, onChange] = useState(undefined);
    const [myArray, updateMyArray] = useState([]);
    const date = new Date();
	
    const firstDateDisplay = (myArray) => { 
        //console.log("firstDateDisplay" + myArray); the first day they click on
        return myArray.length > 0 ? true : false;
    }

    const secondDateDisplay = (myArray) => { 
        //console.log("secondDateDisplay" + myArray); the end day they click on
        return myArray.length === 2 ? true : false;
    }

    const pushDayArray = (value) => {  

        if(myArray.length < 2) { //MODULUS 2 DATE ARRAY NEVER GETS BIG
        updateMyArray( arr => [...arr, `${value} #${arr.length}`]);
        }
        else {
            updateMyArray(arr => [`${value} #${"1"}`]);
        }
        //console.log("pushDayArray"+myArray);
        if(myArray.length == 1){console.log('enough days');}  //FIRES IF DATE RANGE SELECTED
    };
    

    const tileDisabled = ({ activeStartDate, date, view }) => {
        if(date == 'Fri Nov 18 2022 00:00:00 GMT-0700 (Mountain Standard Time)')
        return true;
     }

    return (
        <div className='container'>
            <h1>Booking Calendar</h1>
            <Calendar onChange={onChange} 
            //defaultValue={undefined}
            value={value} 
            tileDisabled={tileDisabled}
            selectRange={true}
            minDate={date}
            onClickDay={(value, event) => {
                //alert(`Clicked day: ${value}`); 
                pushDayArray(value);
            }}
            />
            <p>Minimum booking is two days.</p>
            <h2>Dates Selected:</h2>

            {/* THIS FORMATS THE DATE */}
            <div>
                {firstDateDisplay(myArray) == true ? //DISPLAY FIRST & SECOND DATE SELECTED IF EXIST
                <p>{myArray[0].split('00:')[0] + " to "}</p> : ""}
                {secondDateDisplay(myArray) == true ? <p>{myArray[1].split('00:')[0]}</p> : ""}
            </div>
        </div> 
    );
};
export default Calen;