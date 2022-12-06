import React from 'react';
import useFetch from '../../hooks/useFetch';
import Moment from 'moment';

import '../../scss/components/_pricing.scss';

const Pricing = () => {
	const { loading, error, data } = useFetch(
		'http://147.182.207.198:1337/api/pricings'
	);

	if (loading) {
		return <p>Loading...</p>;
	} else if (error === []) {
		return <p>Error</p>;
	}


  return (
    <div className="pricing">
      {data.data.map((pricing) => (
        <div key={pricing.id} className='block'>
          <p className="season">{pricing.attributes.season}</p>
          <p className="date">{Moment(pricing.attributes.startdate).format('MMM Do')} - {Moment(pricing.attributes.enddate).format('MMM Do')}</p>
          <p className="price">${pricing.attributes.price}/night</p>
        </div>
      ))}

      <div className=" extra">
        <p>Please Note:</p>
        <p className="ex-p">All prices will include an additional 5% GST, and an additional 3% credit card fee.</p>
        <p className="ex-p">Minimim booking of two nights required.</p>
        <p className="ex-p">A deposit will be required at time of booking.</p>
      </div>
    </div>
  );
};

export default Pricing;
