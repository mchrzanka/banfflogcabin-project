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

  let price = [data.data];
  price = price[0];

  let seasonInfo = [];
  let season;

  for (let i = 0; i < price.length; i++) {
    const seasonalPricing = price[i].attributes;
    season = seasonalPricing.season;

    let startDateOfSeason = seasonalPricing.startdate;
    let endDateOfSeason = seasonalPricing.enddate;

    startDateOfSeason = new Date(startDateOfSeason);
    endDateOfSeason = new Date(endDateOfSeason);

    seasonInfo.push = {
      Start: startDateOfSeason.toISOString(),
      End: endDateOfSeason.toISOString(),
    };

console.log(Moment(seasonInfo.Start).format('MMM Do'));
  }

  return (
    //since strapi update, the data is nested in attributes. So instead of putting {review.content}, you have to do {review.attributes.content}. There was also some issues with strapi passing data as an object now instead of as an array, so instead of data.map you have to do data.data.map, and make sure in useFetch.js the useState is [].
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
