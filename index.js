function distanceFromHqInBlocks(distance){
    let blockDistance;
    if (distance > 42) {
        blockDistance = distance - 42;
    } else if (distance < 42) {
        blockDistance = 42-distance;
    }
    return blockDistance;
}

function distanceFromHqInFeet(distance){
    distanceFromHqInBlocks(distance);
    let fromHq = distanceFromHqInBlocks(distance);
    let feetDistance = fromHq * 264;
    return feetDistance;
}


function distanceTravelledInFeet(distance1, distance2){
    let differentBlocksToFeet;
    if (distance2 > 42){
        differentBlocksToFeet = (distance2 - distance1) * 264;
    }
    else if (distance2 < 42){
        differentBlocksToFeet = (distance1 - distance2) * 264;
    }
    return differentBlocksToFeet;
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    let feetTravelled = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (feetTravelled <= 400) {
      return feetTravelled * 0;
    } else if (feetTravelled < 2000) {
      return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled < 2500) {
      return 25;
    } else if (feetTravelled > 2500) {
        return 'cannot travel that far';
    }
    return farePrice;
}
        
    
