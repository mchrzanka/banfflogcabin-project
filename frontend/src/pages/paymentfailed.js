import React from 'react';
import '../scss/pages/_paymentfailed.scss';

export default function PmntFail() {
    return (
        <div className='container-pmnt'>
            <div className='message-pmnt'>
                <h1>Payment Error</h1>
                <p>Your Transaction has failed due to an unknown error.</p>
                <p>Please try again!</p>
                <a className="primary-btn btn " href="/booking">
                    Back to Booking
                </a>
            </div>

        </div>
    );
}