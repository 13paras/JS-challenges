// Ques-> Find number of passengers left 

//bus takes and drop on each busStop
//first element- people get into bus
//second element - num of people get off the bus
//sample number([[10,0],[3,5],[5,8]])



let number = (busStops) => {
    let passengersLeft = 0;
    busStops.forEach(stops => {
        passengersLeft += stops[0] - stops[1];
    });
    console.log(passengersLeft)
}
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) 
