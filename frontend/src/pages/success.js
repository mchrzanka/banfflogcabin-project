import React from 'react';

import '../scss/pages/_success.scss'







export default function SuccessPage() {
    return (


        <div class="container">

            <h1>Booking Confirmed.</h1>
            <h2>See you soon!</h2>
            <p>Your booking has been successfully confirmed. A confirmation email will be sent shortly.</p>
            <p>If you need to make changes to your booking, please email us at <a href="mailto: reservations@banfflogcabin.ca">reservations@banfflogcabin.ca</a></p>

            <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
            </div>

            <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
            </div>

            <div class="bird-container bird-container--three">
                <div class="bird bird--three"></div>
            </div>

            <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
            </div>

        </div>



    );
};


