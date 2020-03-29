import { DateTime } from "luxon";

const searchFlights = async (origin, destination, numberOfLayovers, date) => {
  const when = DateTime.local()
    .plus({ days: 1 })
    .toFormat("dd/MM/yyyy");
  const todayDate = DateTime.local().toFormat("dd/MM/yyyy");
  console.log(date)
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
    dateTo: when
  };
};

export default searchFlights;
