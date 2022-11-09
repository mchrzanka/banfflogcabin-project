import React from 'react';
import ReactDOM from 'react-dom';







function SuccessIcon() {
    return (
        <div className="Thankyou">

            <h1 className='successh1'>Thank you from Banff Log Cabin</h1>
            <p className="successp">wohoo....Your reservation is confirmed</p>
        </div>

    );
};
ReactDOM.render(
    <SuccessIcon />,
    document.getElementById('success')
);