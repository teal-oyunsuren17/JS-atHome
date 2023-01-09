let phoneNumber =prompt("enter your phone number");
if ( Number.isInteger(+phoneNumber.substring(1,11))) {
    if ( phoneNumber.substring(0,3)== +976) {
        if (phoneNumber.length == 12) {
            console.log("та монгол улсын утасны дугаарыг зөв орууллаа") 
        } else {
            console.log("та монгол улсын утасны дугаарыг буруу орууллаа")
        }
    } else {
        console.log("та монгол улсын утасны дугаар оруулна уу")
    }
} else {
    console.log("та утасны дугаар оруулна уу")
}
console.log(+phoneNumber.substring(1,11))


// let phoneNumber =prompt("enter your phone number");
//     if ( phoneNumber.substring(0,3)== +976) {
//         if (phoneNumber.length == 12) {
//             console.log("та монгол улсын утасны дугаарыг зөв орууллаа") 
//         } else {
//             console.log("та монгол улсын утасны дугаарыг буруу орууллаа")
//         }
//     } else {
//         console.log("та монгол улсын утасны дугаар оруулна уу")
//     }
