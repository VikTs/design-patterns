/*
  This code allows to create many copies of pizza
  by prototype
*/

const pizzaPrototype = {
    name: "Margarita",
    ingredients: ["tomatoes", "cheese", "mushrooms"],

    bake: function () {
      console.log( "Smells appetizing!" );
    }
};

const pizza1 = Object.create( pizzaPrototype );
const pizza2 = Object.create( pizzaPrototype );
const pizza3 = Object.create( pizzaPrototype );

console.log("Copy 1: ", pizza1);
console.log("Copy 2: ", pizza2);
console.log("Copy 3: ", pizza3);
