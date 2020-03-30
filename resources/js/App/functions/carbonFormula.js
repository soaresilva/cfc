export const carbonFormula = (totalDistance, totalCO2Amount, economyClass, businessClass) => {
  const a = 0.0001;
  const b = 7.104;
  const c = 5044.93;
  const averageSeatNumber = 280.21; // S
  const passengerLoadFactor = 0.82; //PLF
  const cargoFactor = 0.74; // CF
  const economyClassWeight = 0.8; // CW
  const businessClassWeight = 1.54; // CW
  const emissionFactor = 3.15; // EF
  const multiplier = 2; // M
  const preproduction = 0.54; // P
  const airCraftFactor = 0.00038; // AF
  const infrastructure = 11.68; // A

  if (businessClass) {
    totalCO2Amount =
      ((a * totalDistance * totalDistance + b * totalDistance + c) / (averageSeatNumber * passengerLoadFactor)) *
        (1 - cargoFactor) *
        businessClassWeight *
        (emissionFactor * multiplier + preproduction) +
      airCraftFactor * totalDistance +
      infrastructure;
  } else {
    totalCO2Amount =
      ((a * totalDistance * totalDistance + b * totalDistance + c) / (averageSeatNumber * passengerLoadFactor)) *
        (1 - cargoFactor) *
        economyClassWeight *
        (emissionFactor * multiplier + preproduction) +
      airCraftFactor * totalDistance +
      infrastructure;
  }

  return (totalCO2Amount / 1000).toFixed(3);
};
