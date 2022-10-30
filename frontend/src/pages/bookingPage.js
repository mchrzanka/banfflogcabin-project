//first booking page, for calendar and confirm price/dates. Will have button that says "Continue Booking", that takes you to bookingPageTwo.

<<<<<<< Updated upstream
import React, { useState, useRef } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> Stashed changes
import StripeContainer from '../components/stripe/StripeContainer';

import Calen from './../components/calendar/Calen';

export default function BookingPageOne() {
	const [showItem, setShowItem] = useState(false);

	return (
		<div>
			<div>Booking Page 1</div>

<<<<<<< Updated upstream
			<div><Calen /></div>
=======
			{/* <div><Calen /></div> */}
>>>>>>> Stashed changes
			<div>
				{showItem ? (
					<div>
						{/* <CheckoutForm /> */}
						<StripeContainer />
					</div>
				) : (
					<>
						{' '}
						<h3>$10.00</h3>
<<<<<<< Updated upstream
						
						<button className='tan' onClick={() => {console.log(Calen.data); setShowItem(true);}}>Continue</button>
						
=======
						<button className='tan' onClick={() => setShowItem(true)}>Continue</button>
>>>>>>> Stashed changes
					</>
				)}
			</div>
		</div>
	);
}
