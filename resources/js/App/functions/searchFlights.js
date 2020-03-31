import { DateTime } from "luxon";

const searchFlights = async (origin, destination, numberOfLayovers, dateFrom, dateTo) => {
  const query = new URLSearchParams({
    partner: "picky",
    flyFrom: origin,
    to: destination,
    dateFrom: dateFrom,
    dateTo: dateTo,
    max_stopovers: numberOfLayovers,
    limit: 8
  });
  const url = new URL(`?${query}`, "https://api.skypicker.com/flights");
  const response = await fetch(url);
  const data = await response.json();
  return {
    data: data.data,
    dateFrom: dateFrom,
    dateTo: dateTo
  };
};

export default searchFlights;
