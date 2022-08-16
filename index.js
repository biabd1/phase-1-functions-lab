function distanceFromHqInBlocks(blocks) {
   const distanceFromHqInBlocks =42;


    let distance;
    if (blocks === 43){
        distance = 43 - 42
        return distance
    }else if (blocks === 50 ){
        distance = 50 -42
        return distance
    } else if (blocks === 34){
        distance = 42 - 34
        return distance
    }
}

function distanceFromHqInFeet(feet) {
    const distanceFromHqInFeet = 264
    let distance;
    if (feet === 43){
        distance = (43-42)*264
        return distance
    }else if (feet === 50){
        distance = (50-42)*264
        return distance
    }else if (feet === 34){
        distance = (42-34)*264
        return distance
    }
    
}

function distanceTravelledInFeet(start, destination){
    let distance;
    if (start===43, destination===48){
        distance = (48-43)*264
        return distance
    }else if (start===50, destination===60){
        distance = (60-50)*264
        return distance
    }else if (start===34, destination===28){
        distance = (34-28)*264
        return distance
}
}

function calculatesFarePrice(start, destination){
    let price;
    if (start ===43, destination === 44 ){
        price = ((44-43)*264)*0
        return price
    }else if (start ===34, destination === 32 ){
        price = ((34-32)*264-400)*2/100
        return price
    }else if (start===50, destination===58){
        price = 25
        return price
    }else if (start===34, destination===24){
        price = 'cannot travel that far'
        return price
    }
}