interface PaymentStrategy {
    void pay(int amount);
}

// Concrete Strategy 1
class CreditCardPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println(
                "Paid Rs." + amount +
                " using Credit Card.");
    }
}

// Concrete Strategy 2
class PayPalPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println(
                "Paid Rs." + amount +
                " using PayPal.");
    }
}

// Context Class
class PaymentContext {
    private PaymentStrategy strategy;

    public void setStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void makePayment(int amount) {
        strategy.pay(amount);
    }
}

public class StrategyPattern {
    public static void main(String[] args) {

        PaymentContext payment = new PaymentContext();

        payment.setStrategy(new CreditCardPayment());
        payment.makePayment(5000);

        payment.setStrategy(new PayPalPayment());
        payment.makePayment(3000);
    }
}