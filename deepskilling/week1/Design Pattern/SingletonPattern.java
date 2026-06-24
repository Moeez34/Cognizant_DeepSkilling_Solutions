class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("Logger object created.");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

public class SingletonPattern {
    public static void main(String[] args) {

        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();

        l1.log("First message");
        l2.log("Second message");

        if (l1 == l2) {
            System.out.println("Only one Logger object exists.");
        } else {
            System.out.println("Multiple Logger objects created.");
        }
    }
}
