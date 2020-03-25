const deleteTripsUrl = "/api/trips/";

export const deleteTrip = async id => {
  const response = await fetch(`${deleteTripsUrl}${id}`, { method: "DELETE" });
  await response.json();
};


// export const DeleteTripButton = ({ handleDeleteTrip, trip }) => {
//   return (
//       <button
//           className="delete-trip-button"
//           onClick={() => handleDeleteTrip(trip.id)}
//       >
//           delete trip
//       </button>
//   );
// }