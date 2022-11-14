import React from "react";
import useFetch from "../../hooks/useFetch";
import Moment from 'moment';

import '../../scss/components/_pricing.scss';

const Pricing = () => {
  const { loading, error, data } = useFetch(
    "http://147.182.207.198:1337/api/pricings"
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
          <p>{pricing.attributes.season}</p>
          <p>{Moment(pricing.attributes.startdate).format('MMM Do')} - {Moment(pricing.attributes.enddate).format('MMM Do')}</p>
          <p>${pricing.attributes.price}/night</p>
        </div>
      ))}


    </div>
  );
};

export default Pricing;
