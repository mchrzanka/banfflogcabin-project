import React, { useState } from "react";
import DatePicker, {
  Calendar,
  getAllDatesInRange
} from "react-multi-date-picker";
import './calen.scss';
import useFetch from '../../hooks/useFetch';
export default function CalendarMain() {
  let [inputValue, setInputValue] = useState("");
  let [inputValue2, setInput2Value] = useState("");
  let [value, setValue] = useState([]);



  /* if (loading) {
     return <p>Loading...</p>;
   } else if (error === []) {
     return <p>Error</p>;
   }
*/
  return (
    <div className="CalendarMain">

      <h1>Banff Log Cabin</h1>
      <Calendar
        multiple
        /**
         * set "onlyShowInRangeDates" to false,
         * if you want to see selected dates that
         * are not in range of min and max date
         */
        onlyShowInRangeDates={false}
        minDate={inputValue}
        maxDate={inputValue2}
        value={value}
        onChange={setValue}
      />



    </div>
  );
}
