/*
  This code allows to choose strategy (delivery or pickup)
  while releasing the order
*/

interface ReleaseStrategy {
    release(): void;
}

class DeliveryStrategy implements ReleaseStrategy {
    release(): void {
        console.log('Deliver order');
    }
}

class PickupStrategy implements ReleaseStrategy {
    release(): void {
        console.log('Pickup order');
    }
}

class ReleaseOrderSystem {
    orderStrategy: ReleaseStrategy;

    setStrategy(orderStrategy: ReleaseStrategy) {
        this.orderStrategy = orderStrategy;
    }

    release(): void {
        return this.orderStrategy.release();
    }
}

const releaseOrderSystem = new ReleaseOrderSystem();
releaseOrderSystem.setStrategy(new DeliveryStrategy());
releaseOrderSystem.release(); // Deliver order
releaseOrderSystem.setStrategy(new PickupStrategy());
releaseOrderSystem.release(); // Pickup order


