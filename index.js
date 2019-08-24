function distanceFromHqInBlocks(location) {
  return location > 42 ? location - 42 : 42 - location;
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(location1, location2) {
  let blocks = location1 - location2;
  return blocks < 0 ? blocks * -1 * 264 : blocks * 264;
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far";
  } else if (distanceTravelledInFeet(start, destination) > 2000) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  }
}
