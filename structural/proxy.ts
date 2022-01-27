/*
  This code allows to create orders
  only for existing pizzas
*/

interface Order {
    create(name: string): void;
}

class PizzaOrder implements Order {
    create(pizzaName: string): void {
        console.log('Order created');
    }
}

class PizzaOrderProxy implements Order {
    private allowedPizzaList = ["margarita", "carbonara"];

    create(pizzaName): void {
        const order = new PizzaOrder();
        const isAllowedToOrder = this.allowedPizzaList.includes(pizzaName);

        if (isAllowedToOrder) {
            order.create(pizzaName);
        } else {
            console.error("The pizza name is not exists");
        }
    }
}

const pizzaOrder = new PizzaOrderProxy();
pizzaOrder.create("margarita"); // Order will be created
pizzaOrder.create("americana"); // Error will appear


