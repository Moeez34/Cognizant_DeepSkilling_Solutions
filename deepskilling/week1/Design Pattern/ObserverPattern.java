import java.util.ArrayList;

interface Observer {
    void update(String stockName, double price);
}

interface Stock {
    void register(Observer o);
    void deregister(Observer o);
    void notifyObservers();
}

// Concrete Subject
class StockMarket implements Stock {
    private ArrayList<Observer> observers = new ArrayList<>();
    private String stockName;
    private double price;

    public StockMarket(String stockName) {
        this.stockName = stockName;
    }

    public void setPrice(double price) {
        this.price = price;
        notifyObservers();
    }

    public void register(Observer o) {
        observers.add(o);
    }

    public void deregister(Observer o) {
        observers.remove(o);
    }

    public void notifyObservers() {
        for (Observer o : observers) {
            o.update(stockName, price);
        }
    }
}

// Concrete Observer 1
class MobileApp implements Observer {
    public void update(String stockName, double price) {
        System.out.println(
            "Mobile App: " + stockName +
            " price updated to Rs." + price);
    }
}

// Concrete Observer 2
class WebApp implements Observer {
    public void update(String stockName, double price) {
        System.out.println(
            "Web App: " + stockName +
            " price updated to Rs." + price);
    }
}

public class ObserverPattern {
    public static void main(String[] args) {

        StockMarket stock = new StockMarket("TCS");

        Observer mobile = new MobileApp();
        Observer web = new WebApp();

        stock.register(mobile);
        stock.register(web);

        stock.setPrice(4200);

        System.out.println();

        stock.setPrice(4500);
    }
}
