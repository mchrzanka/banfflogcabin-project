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