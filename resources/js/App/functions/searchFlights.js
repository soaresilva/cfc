import { DateTime } from "luxon";

const searchFlights = async (origin, destination, numberOfLayovers, date) => {
  const todayDate = DateTime.local().toFormat("dd/MM/yyyy");
  const query = new URLSearchParams({
    partner: "picky",
    flyFrom: origin,
    to: destination,
    dateFrom: todayDate,
    dateTo: date,
    max_stopovers: numberOfLayovers,
    limit: 8
  });
  const url = new URL(`?${query}`, "https://api.skypicker.com/flights");
  const response = await fetch(url);
  const data = await response.json();
  return {
    data: data.data,
    dateFrom: todayDate,
    dateTo: date
  };
};

export default searchFlights;
