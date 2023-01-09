let register = prompt("enter your register");
if (register.length==10) {
    if (isNaN(register.substring(0,1))) {
        if(Number.isInteger(+register.substring(2,9))) {
            console.log("та монгол улсын регистрийн дугаарыг зөв орууллаа")
        }
        else {
            console.log("та монгол улсын регистрийн дугаарыг буруу орууллаа")
        }
    } else {
        console.log("та монгол улсын регистрийн дугаарыг зөв оруулна уу")
    }
} else {
    console.log("та монгол улсын регистрийн дугаарын уртыг зөв оруулна уу")
}
