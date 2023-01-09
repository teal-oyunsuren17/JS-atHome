let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] ;
console.log(array.sort());
console.log(array.reverse());
array.shift()
console.log(array);
array.splice(Math.floor(array.length/2),1);
console.log(array);
array.pop();
console.log(array);
array.splice(0,array.length)
console.log(array)

