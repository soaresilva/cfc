const deleteTripsUrl = "/api/trips/";

export const deleteTrip = async id => {
  const response = await fetch(`${deleteTripsUrl}${id}`, { method: "DELETE" });
  await response.json();
};