

function outlierSeeker (array) {
    let evens = 0
    let odds = 0 
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            evens ++
        }else{
            odds ++
        }
    }
    if(evens > 1){
        for (let i = 0; i < array.length; i++){
            if( array[i] %2 !== 0 )
            return array[i]  
        }
        
        //print the odd number 
    }
    if(odds >1){
        for (let i = 0; i < array.length; i++){
            if( array[i] %2 === 0 )
            return array[i]
        //pring the even number 
    }
    

    //loop through the array. check to see if each one is even or odd  
    //count up evens 
    // count up odds 
    
    //the one that is not even spit it out. 
    //
}}

let evenarray = [2, 4, 0, 100, 4, 11, 2602, 36] 
let odds = [160, 3, 1719, 19, 11, 13, -21] 

console.log(outlierSeeker(evenarray))
console.log(outlierSeeker(odds))