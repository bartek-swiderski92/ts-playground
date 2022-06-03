interface State {
    order: Order;

    cancelOrder();
    verifyPayment();
    shipOrder();
}


class Order {
    public paymentPendingState: State;
    public cancelledOrderState: State;
    public orderBeingPreparedState: State;
    public orderShippedState: State;


    public currentState: State;

    constructor() {
        this.paymentPendingState = new PaymentPendingState(this);
        this.cancelledOrderState = new CancelledOrderState(this)
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);

        this.setState(this.paymentPendingState)
    }

    public setState(state: State) {
        this.currentState = state
    }

    public getState(): State {
        return this.currentState;
    }
}

class PaymentPendingState implements State {
    public order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Canceling your unpaid order...');
        this.order.setState(this.order.cancelledOrderState)
    }
    verifyPayment() {
        console.log('Payment Verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState)
    }
    shipOrder() {
        console.log('We cannot ship the order when payment is pending!');

    }
}

class CancelledOrderState implements State {
    public order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Your order has already been cancelled');
    }
    verifyPayment() {
        console.log('Order Cancelled, you cannot verify payment.');
    }
    shipOrder() {
        console.log('Order cannot shipt, it was cancelled');
    }
}

class OrderBeingPreparedState implements State {
    public order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelledOrderState)

    }
    verifyPayment() {
        console.log('Already verified your payment.');
    }

    shipOrder() {
        console.log('Shipping your order now!');
        this.order.setState(this.order.orderShippedState)
    }
}

class OrderShippedState implements State {
    public order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('You cannot cancel, already shipped...');

    }
    verifyPayment() {
        console.log('You verify payment, already shipped...');
    }
    shipOrder() {
        console.log('You ship it again, already shipped...');
    }
}

let order = new Order();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();


console.log('Order state: ' + (<any>order.getState()).constructor.name);
