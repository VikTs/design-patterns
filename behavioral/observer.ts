/*
  This code allows to notify the client
  when the order is ready
*/

interface Observer {
    notify(): void;
}

class OrderSystem {
    private observers: Observer[] = [];

    startWaitingOrder(observer: Observer): void {
        console.log('Start waiting for order');
        this.observers.push(observer);
    }

    stopWaitingOrder(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);

        console.log('Get order and stop waiting');
    }

    notifyClient(message: string): void {
        console.log(message);

        for (const observer of this.observers) {
            observer.notify();
        }
    }

    cookOrder(): void {
        this.notifyClient('Pizza was cooked');
    }
}

class Client implements Observer {
    notify(): void {
        console.log('You can get your order');
    }
}

const orderSystem = new OrderSystem();
const client = new Client();
orderSystem.startWaitingOrder(client);
orderSystem.cookOrder();
orderSystem.stopWaitingOrder(client);

