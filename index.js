function distanceFromHqInBlocks(distance){
    let difference =  (distance - 42);
    if (difference < 0) {
        difference *= -1;
    }
    return difference;
}

function distanceFromHqInFeet(distance){
    const blocks = distanceFromHqInBlocks(distance);
    return (blocks * 264);
}

function distanceTravelledInFeet(startBlock, endBlock){
    let difference = (startBlock - endBlock);
    if (difference < 0) {
        difference *= -1;
    }
    return difference * 264;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    switch (true){
        case (distance < 400):
            return 0;
            break;
        case (distance > 2500):
            return "cannot travel that far";
            break;
        case (distance > 2000 && distance <= 2500):
            return 25;
            break;
        case (distance >= 400 && distance <= 2000):
            return (distance-400) * .02;
            break;
    }

}
// The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.