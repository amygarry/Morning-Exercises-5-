//the fucntion needs to take in 1. the initial value 
//2. what percent it is going to grow 
//3. how many people are moving in 
//4. how many people it wants 
//It should then spit out how many years it will take to get to that point. 

function countTheYears (initalPop, percent, addedPeeps, desiredPop){
    let years = 0 
    let currentPop = initalPop
    while (currentPop<=desiredPop){
       let yearGrowth = currentPop*(percent/100)+addedPeeps
        currentPop += yearGrowth
        years++ 
    }
return years 
}

console.log(countTheYears(1500000, 2.5, 10000, 2000000))