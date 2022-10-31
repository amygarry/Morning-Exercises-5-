//create a string 
//put the dashes in 

function yourDigits (array) {
    let phnNum = "()-"
    for (let i = 3; i < array.length; i--) {
       if(i >0 ){
        phnNum =phnNum[0] + array[i]  + phnNum.slice(1, 3)
       }
       console.log(phnNum)
        
    }
    
}

yourDigits([4,8,0,4,4,0,2,9,9,0])