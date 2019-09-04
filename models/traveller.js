const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartLocations = this.journeys.map(function (journey) {
    return journey.startLocation;
  })
  return journeyStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocations = this.journeys.map(function (journey) {
    return journey.endLocation;
  })
  return journeyEndLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys = this.journeys.filter((journey) => {
    if (journey.transport === transport) return journey;
  });
  return foundJourneys;
}

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
 const foundJourneys = this.journeys.filter((journey) => {
  if (journey.distance > minDistance) return journey;
 });
 return foundJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

module.exports = Traveller;

Traveller.prototype.getUniqueModesOfTransport = function () {
  allVehicles = this.journeys.map(function (journey){
    return journey.transport;
  })

  uniqueVehicles = allVehicles.filter(function (singleVehicle, index) {
    return allVehicles.indexOf(singleVehicle) === index;
  });
  return uniqueVehicles;
};