"use client";
import React, { useEffect, useState } from "react";

function CountryLookUp() {
  const [country, setCountry] = useState("");
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`,
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div>{country}</div>;
}

export default CountryLookUp;
