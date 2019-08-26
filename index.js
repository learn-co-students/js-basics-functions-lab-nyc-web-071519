// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(location1, location2) {
    return Math.abs(location2 - location1) * 264
}

function calculatesFarePrice(start, destination) {
    let price = 0
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return price
    } else if (distance >= 400 && distance <= 2000) {
        return price = (distance - 400) * .02
        // return price
    } else if (distance > 2500) {
        return "cannot travel that far"
    } else if (distance > 2000) {
        return price = 25
        // return price
    }
}