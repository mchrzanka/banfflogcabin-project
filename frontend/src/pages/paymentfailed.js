import React from 'react';
import '../scss/pages/_paymentfailed.scss';

export default function PmntFail() {
    return (
        <div className='container-pmnt'>
            <div className='message-thanks'>
                <h1>PAYMENT FAILED</h1>
                <h2>Your Transaction has failed due to an unknown error.</h2>
                <h2>Please try again!</h2>

            </div>

        </div>
    );
}