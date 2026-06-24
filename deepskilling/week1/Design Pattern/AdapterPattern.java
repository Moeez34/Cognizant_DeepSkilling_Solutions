interface PaymentProcessor {
    void processPayment(int amount);
}

// Adaptee 1
class PayPalGateway {
    public void makePayment(int amount) {
        System.out.println("Payment of Rs." + amount + " made using PayPal.");
    }
}

// Adaptee 2
class StripeGateway {
    public void pay(int amount) {
        System.out.println("Payment of Rs." + amount + " made using Stripe.");
    }
}

// Adapter for PayPal
class PayPalAdapter implements PaymentProcessor {
    private PayPalGateway paypal;

    public PayPalAdapter(PayPalGateway paypal) {
        this.paypal = paypal;
    }

    public void processPayment(int amount) {
        paypal.makePayment(amount);
    }
}

// Adapter for Stripe
class StripeAdapter implements PaymentProcessor {
    private StripeGateway stripe;

    public StripeAdapter(StripeGateway stripe) {
        this.stripe = stripe;
    }

    public void processPayment(int amount) {
        stripe.pay(amount);
    }
}

public class AdapterPattern {
    public static void main(String[] args) {

        PaymentProcessor p1 =
                new PayPalAdapter(new PayPalGateway());

        PaymentProcessor p2 =
                new StripeAdapter(new StripeGateway());

        p1.processPayment(5000);
        p2.processPayment(3000);
    }
}
