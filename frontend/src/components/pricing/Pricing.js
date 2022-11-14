import React from "react";
import useFetch from "../../hooks/useFetch";


import '../../scss/components/_pricing.scss'

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
    //since strapi update, the data is nested in attributes. So instead of putting {review.content}, you have to do {review.attributes.content}. There was also some issues with strapi passing data as an object now instead of as an array, so instead of data.map you have to do data.data.map, and make sure in useFetch.js the useState is [].
    <div className="pricing">
      {data.data.map((pricing) => (
        <div key={pricing.id} className='block'>
          <p>{pricing.attributes.season}</p>
          <p>
            {pricing.attributes.startdate} - {pricing.attributes.enddate}
          </p>
          <p>${pricing.attributes.price}/night</p>
        </div>
      ))}

      <div className="block extra">
        <p>Please Note:</p>
        <p className="ex-p">All prices will include an additional 5% GST.</p>
        <p className="ex-p">Minimim booking of two nights required.</p>
        <p className="ex-p">A deposit will be required at time of booking.</p>
      </div>
    </div>
  );
};

export default Pricing;
