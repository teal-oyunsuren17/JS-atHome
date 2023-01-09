let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("Sugar");
console.log(shoppingCart);

let allergic = shoppingCart.indexOf("Honey");
shoppingCart.splice(allergic,1);
console.log(shoppingCart);

let tea = shoppingCart.indexOf("Tea");
shoppingCart.splice(tea,1,"Green tea");
console.log(shoppingCart);





