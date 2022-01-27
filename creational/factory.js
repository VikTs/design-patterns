/*
  This code allows to buy any pizza,
  knowing only the name
*/

function Margarita() {
    this.name = "Margarita";
    this.ingredients = ["tomatoes", "cheese", "mushrooms"];
}

function Carbonara() {
    this.name = "Carbonara";
    this.ingredients = ["tomatoes", "cheese"];
}

class PizzaFactory {
    pizzaClass = Margarita;

    createPizza(pizzaType) {
        switch (pizzaType) {
            case "margarita": this.pizzaClass = Margarita; break;
            case "carbonara": this.pizzaClass = Carbonara; break;
        }
        return new this.pizzaClass();
    };
}

const pizzaFactory = new PizzaFactory();
const margarita = pizzaFactory.createPizza("margarita");
const carbonara = pizzaFactory.createPizza("carbonara");

console.log("Margarita: ", margarita);
console.log("Carbonara: ", carbonara);
