"use strict";

const fruits =["Apple", "Banana", "Mango", "Grapes"];
console.log(fruits);

const vegetables=["Tomatoes","Potatoes","Onions"];
console.log(vegetables);

const message="Hello World!";
const letters=Array.from(message);

console.log(letters);
fruits.push("Cherry");
console.log(fruits);

vegetables.unshift("Carrots")
console.log(vegetables);

console.log([...fruits,...vegetables]);
