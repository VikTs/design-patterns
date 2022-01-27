/*
  This code allows to quickly add discount
  to pizza`s price without changing initial code
*/

export interface Pizza {
    getCost(): number;
}

class SimplePizza implements Pizza {
    getCost(): number {
        return 80;
    }
}

class PizzaWithDiscount implements Pizza {
    protected pizza: Pizza;
    protected discount: number;

    constructor(pizza: Pizza, discount: number) {
        this.pizza = pizza;
        this.discount = discount;
    }

    getCost(): number {
        return this.pizza.getCost() - this.discount;
    }
}

let myPizza = new SimplePizza();
myPizza.getCost(); // 80
myPizza = new PizzaWithDiscount(myPizza, 20);
myPizza.getCost(); // 60

