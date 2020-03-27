const haversineDistance = (lat1, lat2, lon2, lon1, arrayWithDistances, result) => {
  var R = 6371; // km
  const pi = Math.PI;
  var φ1 = lat1 / (180 / pi);
  var φ2 = lat2 / (180 / pi);
  var Δφ = (lat2 - lat1) / (180 / pi);
  var Δλ = (lon2 - lon1) / (180 / pi);
  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = (R * c).toFixed(2);
  arrayWithDistances.push(Number(d));
  result = arrayWithDistances.reduce((a, b) => a + b).toFixed(0);
  return result;
};

export default haversineDistance;