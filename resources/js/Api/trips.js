const deleteTripsUrl = "/api/trips/";
const deleteEventsAndTripsUrl = "/api/events/";

export const deleteTrip = async id => {
  const response = await fetch(`${deleteTripsUrl}${id}`, { method: "DELETE" });
  await response.json();
};

export const deleteEventAndTrips = async id => {
  const response = await fetch(`${deleteEventsAndTripsUrl}${id}`, { method: "DELETE" });
  await response.json();
};
