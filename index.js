// Code your solution in this file!
function distanceFromHqInBlocks(blockNum){
    if (blockNum > 42){
        return blockNum - 42
    }else{
        return 42 - blockNum
    }
}

function distanceFromHqInFeet(blockNum){
    return distanceFromHqInBlocks(blockNum) * 264;
}

function distanceTravelledInFeet(start, end){
    if (start < end){
        return (end - start) * 264
    }else{
        return (start - end) * 264
    }
}

function calculatesFarePrice(start, destination){
    let feetTraveled = distanceTravelledInFeet(start, destination)

    if(feetTraveled <= 400){
        return 0
    }else if (feetTraveled > 400 && feetTraveled <= 2000){
        return .02 * (feetTraveled - 400)
    }else if (feetTraveled > 2000 && feetTraveled < 2500){
        return 25;
    }else{
        return "cannot travel that far"
    }
}