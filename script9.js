// program 1
// for(intialization ; conditionCheck , increment/Decrement){
//     // statements
// }

// program2
for(let i = 1 ; i <= 5 ; i++){  //2 // 3 // 4 // 5 // 6
    console.log("hello") 
    // "hello" // "hello" // "hello" // "hello" // "hello"

}

// program2
for(let i = 0 ; i <= 5 ; i++){ //1 // 2 // 3 // 4 // 5 // 6
    console.log(i) // 0 // 1// 2 // 3 //4 // 5
}


// program3
for(let i = 5 ; i >= 1; i--){ // 4 //3 // 2 //1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program4
for(let i = 2; i <= 20 ; i = i + 2){
    console.log(i)
}


// program 5
// break statment with for loop
for(let i = 1 ; i <= 5 ; i++){ //2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 //2
}


for(let i = 1 ; i <= 5 ; i++){  // 2 //3
    console.log(i)  // 1 // 2 // 3
    if(i == 3){
        break
    }
}

// continue
for(let i = 0 ; i<= 3 ; i++){ // 1 // 2 // 3 // 4
    if(i == 2){
        continue
    }
    console.log(i) // 0 // 1 // 3
}

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    if(i ==3){
        break
    }
    console.log(i) // 5 // 4
}

for(let i = 5 ; i >= 0 ; i--){ // 4 // 3 // 2 // 1 // 0 // -1
    if(i == 3){
        continue
    }
    console.log(i) // 5 // 4 // 2 // 1 // 0
}






