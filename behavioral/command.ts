/*
  This code allows to send commands (cook/pack order)
  from cashier (recipient) to bakery (receiver)
*/

interface Command {
    execute(): void;
}

interface Bakery {
    cookOrder(): void;
    packOrder(): void;
}

interface Cashier {
    runOperation(command: Command): void;
}

class BakeryReceiver implements Bakery {
    cookOrder(): void {
        console.log('Cook order');
    }

    packOrder(): void {
        console.log('Pack order');
    }
}

class CashierRecipient implements Cashier {
    runOperation(command: Command): void {
        command.execute();
    }
}

class CookCommand implements Command {
    bakery: Bakery;
    constructor(bakery: Bakery) {
        this.bakery = bakery;
    }

    execute(): void {
        this.bakery.cookOrder();
    }
}

class PackCommand implements Command {
    bakery: Bakery;
    constructor(bakery: Bakery) {
        this.bakery = bakery;
    }

    execute() {
        this.bakery.packOrder();
    }
}

const bakery = new BakeryReceiver();
const cook = new CookCommand(bakery);
const pack = new PackCommand(bakery);

const cashier = new CashierRecipient();
cashier.runOperation(cook);
cashier.runOperation(pack);

