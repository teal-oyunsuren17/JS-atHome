let array = [5 ,6, 4 ,12 ,19 ,121, 1 ,7 ,9 ,63];
let even = 0;
let odd = 0;
for (let i =0; array.length>i; i++) {
    if (array[i]%2===0) {
        even += 1;
    } else {
        odd += 1;
    }
}
console.log(array.length + " тооны ", even," нь тэгш " ,odd ," нь сондгой байна") 