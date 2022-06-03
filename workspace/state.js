class Order {
    paymentPendingState;
    cancelledOrderState;
    orderBeingPreparedState;
    orderShippedState;
    currentState;
    constructor() {
        this.paymentPendingState = new PaymentPendingState(this);
        this.cancelledOrderState = new CancelledOrderState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.setState(this.paymentPendingState);
    }
    setState(state) {
        this.currentState = state;
    }
    getState() {
        return this.currentState;
    }
}
class PaymentPendingState {
    order;
    constructor(order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Canceling your unpaid order...');
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log('Payment Verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState);
    }
    shipOrder() {
        console.log('We cannot ship the order when payment is pending!');
    }
}
class CancelledOrderState {
    order;
    constructor(order) {
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
class OrderBeingPreparedState {
    order;
    constructor(order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log('Already verified your payment.');
    }
    shipOrder() {
        console.log('Shipping your order now!');
        this.order.setState(this.order.orderShippedState);
    }
}
class OrderShippedState {
    order;
    constructor(order) {
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
console.log('Order state: ' + order.getState().constructor.name);
