import { DateTime } from "luxon";

const searchFlights = async (origin, destination, direct) => {
  const when = DateTime.local()
    .plus({ days: 1 })
    .toFormat("dd/MM/yyyy");
  const todayDate = DateTime.local().toFormat("dd/MM/yyyy");

  const query = new URLSearchParams({
    partner: "picky",
    v: 3,
    flyFrom: origin,
    to: destination,
    dateFrom: todayDate,
    dateTo: when,
    max_stopovers: direct,
    limit: 3
  });
  const url = new URL(`?${query}`, "https://api.skypicker.com/flights");
  // console.log("url", url);
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data.data);
  return data.data;
};

export default searchFlights;
