// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

function checkDogs(dogsJulia,dogsKate){

    // dogsJulia.shift();
    // dogsJulia.pop();
    // dogsJulia.pop(); //can't use these because they mutate the array
    // let fullLength = dogsJulia.length;
    // firstElement = dogsJulia[0];
    // secondLastElement = dogsJulia[fullLength-2];
    // firstLastElement = dogsJulia[fullLength-1];
    let dogsJuliaCorrect = dogsJulia.slice(1,-2);
    let allDogs = [...dogsJuliaCorrect,...dogsKate];
 console.log(allDogs);


 for (const [index,age] of allDogs.entries()){
    if (age >= 3){
        console.log(`Dog number ${index+1} is an adult, and is ${age} years old.`)
    }
    else{
        console.log(`Dog number ${index+1} is still a puppy.`)
    }
    
 }
}


    
   
 

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);