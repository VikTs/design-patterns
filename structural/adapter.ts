/*
  This code allows to add field "name" to custom pizza
  to create an order correctly
*/

export interface Pizza {
    name: string;
    ingredients: string[];
}

interface CustomPizza {
    ingredients: string[];
}

export class Order {
    create(pizzas: Pizza[]): void {
        const pizzasName = pizzas.map((pizza) => pizza.name).join(' ');
        console.log(`Pizzas ${pizzasName} were ordered`);
    }
}

class MargaritaPizza implements Pizza {
    name = 'Margarita';
    ingredients: string[] = [];
}

class CustomerPizza implements CustomPizza {
    ingredients: string[] = [];
}

class PizzaAdapter {
    adoptedPizza: Pizza;
    constructor(customPizza: CustomPizza) {
        this.adoptedPizza = {...customPizza, name: 'Custom'};
    }
}

const margarita = new MargaritaPizza();
const customPizza = new CustomerPizza();
const adoptedPizza = new PizzaAdapter(customPizza).adoptedPizza;

const order = new Order();
order.create([adoptedPizza, margarita]);
