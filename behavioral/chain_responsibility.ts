/*
  This code allows cashier to ask
  the list of questions to client
  (e.g. "Do you want some salads?")
  and handle the answer
  (e.g. "Yes, give me the olivier, please")
*/

interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

class DrinksHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Drinks') {
            return `Client: Yes, one cappuccino, please.`;
        }
        return super.handle(request);

    }
}

class SaladsHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Salads') {
            return `Client: Yes, give me the olivier, please`;
        }
        return super.handle(request);
    }
}

function askQuestions(handler: Handler) {
    const foodToAskList = ['Salads', 'Deserts', 'Drinks'];
    for (const food of foodToAskList) {
        console.log(`Cashier: Do you want some ${food}?`);
        console.log(handler.handle(food) || 'Client: No');
    }
}

const drinks = new DrinksHandler();
const salads = new SaladsHandler();
drinks.setNext(salads);

console.log('Chain: Drinks > Salads\n');
askQuestions(drinks);
console.log('Subchain: Salads\n');
askQuestions(salads);

