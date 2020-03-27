const haversineDistance = (lat1, lat2, lon2, lon1, arrayWithDistances, totalDistance) => {
  const R = 6371; // km
  const pi = Math.PI;
  let φ1 = lat1 / (180 / pi);
  let φ2 = lat2 / (180 / pi);
  let Δφ = (lat2 - lat1) / (180 / pi);
  let Δλ = (lon2 - lon1) / (180 / pi);
  let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = (R * c).toFixed(2);
  arrayWithDistances.push(Number(d));
  totalDistance = arrayWithDistances.reduce((a, b) => a + b).toFixed(0);
  return totalDistance;
};

export default haversineDistance;