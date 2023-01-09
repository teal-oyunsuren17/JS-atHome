let arr1 = new Array();
let arr1Size = 6;
let arr2 = new Array();
let arr2Size = 6;
let output = [];

for (let i=0; i<arr1Size; i++) {
    arr1[i] = prompt("enter array element" + (i+1)+ "arr1");
    arr2[i] = prompt("enter array element" + (i+1)+ "arr2");
    output[i] = arr1[i] * arr2[i];
}
console.log(output)






