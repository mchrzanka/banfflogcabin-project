import React from "react";
import useFetch from "./useFetch";

const Price = () => {
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
  //console.log(price.length);

  let seasonInfo = [];

  for (let i = 0; i < price.length; i++) {
    const seasonalPricing = price[i].attributes;
    //console.log(seasonalPricing);
    const season = seasonalPricing.season;

    let startDateOfSeason = seasonalPricing.startdate;
    let endDateOfSeason = seasonalPricing.enddate;
    let priceOfSeason = seasonalPricing.price;
    //console.log(startDateOfSeason);

    startDateOfSeason = new Date(startDateOfSeason);
    endDateOfSeason = new Date(endDateOfSeason);

    seasonInfo.push ({
      name: season,
      Start: startDateOfSeason.toISOString(),
      End: endDateOfSeason.toISOString(),
      Price: priceOfSeason,
    });

    //console.log(seasonInfo);
    
  }

  return seasonInfo;

};

export default Price;
