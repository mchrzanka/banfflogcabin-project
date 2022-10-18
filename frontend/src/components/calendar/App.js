import React, { useState } from "react";
import DatePicker, {
  Calendar,
  getAllDatesInRange
} from "react-multi-date-picker";
import "./styles.css";

export default function App() {
  let [inputValue, setInputValue] = useState("");
  let [inputValue2, setInput2Value] = useState("");
  let [value, setValue] = useState([]);

  return (
    <div className="App">
      
      <h1>Banff Log Cabin</h1>
      <Calendar
        multiple
        /**
         * set "onlyShowInRangeDates" to false,
         * if you want to see selected dates that
         * are not in range of min and max date
         */
        onlyShowInRangeDates={true}
        minDate={inputValue}
        maxDate={inputValue2}
        value={value}
        onChange={setValue}
      />
      <hr />
      
      <DatePicker
        range
        /**
         * Keep in mind that activating this prop
         * may cause slow rendering at
         * big ranges of Dates
         */
        eachDaysInRange
        onChange={(dateObjects) => {
          let allDates = getAllDatesInRange(dateObjects, true);

          if (allDates.length < 2) return;

          alert("you selected \n" + allDates.join(",\n"));
        }}
      />
    </div>
  );
}
