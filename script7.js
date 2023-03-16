
let city = "nagpur"

// switch(city){
//     case "pune":
//         console.log("MH")
//     case "bhopal":
//         console.log("MP")
//     case "jaipur":
//         console.log("RJ")
//     default:
//         console.log("Incorrect cityname")
// }

city = "indore"
// switch(city){
//     case "pune":
//         console.log("MH")
//         break
//     case "bhopal":
//         console.log("MP")
//         break
//     case "jaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log("Incorrect cityname")
// }

switch (city) {
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "bhopal":
    case "indore":
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("Incorrect cityname")
}