/*
  This code allows to buy or order pizza
  without detailing the steps
  (these steps are described in the facade)
*/

export class Pizzeria {
    order(): Pizzeria {
        console.log('Order created');
        return this;
    }

    deliver(): Pizzeria {
        console.log('Order delivered');
        return this;
    }

    cookPizza(): Pizzeria {
        console.log('Pizza cooked');
        return this;
    }

    getPizza(): Pizzeria {
        console.log('Order was taken by customer');
        return this;
    }

    pay(): Pizzeria {
        console.log('Order payed');
        return this;
    }
}

export class PizzeriaFacade {
    pizzeria: Pizzeria = new Pizzeria();

    buyPizza(): void {
        this.pizzeria.order().pay().cookPizza().getPizza();
    }

    orderPizza(): void {
        this.pizzeria.order().cookPizza().deliver().pay();
    }
}

const pizzeria = new PizzeriaFacade();
pizzeria.orderPizza();
pizzeria.buyPizza();
