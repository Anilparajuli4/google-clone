"use client";
import React, { useEffect, useState } from "react";

function CountryLookUp() {
  const [country, setCountry] = useState("Nepal");
  //   useEffect(() => {
  //     fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.IP_API_KEY}`)
  //       .then((res) => res.json())
  //       .then((data) => setCountry(data));
  //   }, []);
  return <div>{country}</div>;
}

export default CountryLookUp;
