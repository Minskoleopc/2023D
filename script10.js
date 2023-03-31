

// while loop
// intialization 
//while(condtion){
    // statement ----
    // increment / decrement

//}

let i1 = 1
while(i1 <= 5){
    console.log('hello')
    //i = i + 1
     i1++ // 2 // 3 // 4 // 5 //6
    // i += 1

}

let i2 = 1
while(i2 <= 5){
    console.log(i2) // 1 // 2 // 3 // 4 // 5
    i2 ++ // 2 // 3 // 4 // 5 // 6
}

let i3 = 5
while(i3 >= 1){
    console.log(i3) // 5 // 4 // 3 // 2 //1
    i3 -- //4 // 3 // 2 // 1  // 0
}

let i4 = 2
while(i4 <= 20){
    console.log(i4)
    i4 = i4 + 2
}

let i5 = 20
while(i5 >= 2){
    console.log(i5)
    i5 = i5 - 2
}

let i6 = 5

while(i6 >= 1){
    if(i6 == 3){
        break
    }
    console.log(i6) // 5 // 4

    i6 -- // 4 // 3
}

let i7 = 5
while(i7 >= 1){
    console.log(i7)  // 5  // 4 // 3
    if(i7 == 3){
        break
    }
    i7 -- // 4 // 3
}

let i8 = 1
while(i8 <= 5){
    if(i8 == 3){
        i8++ // 4
        continue
    }
    console.log(i8) //1 // 2 // 4 // 5
    i8 ++ // 2 // 3 // 5 // 6
}
