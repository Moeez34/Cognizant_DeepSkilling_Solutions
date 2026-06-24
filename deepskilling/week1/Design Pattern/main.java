abstract class Document {
    abstract void open();
}

class WordDocument extends Document {
    public void open() {
        System.out.println("Opening Word Document");
    }
}

class PdfDocument extends Document {
    public void open() {
        System.out.println("Opening PDF Document");
    }
}

class ExcelDocument extends Document {
    public void open() {
        System.out.println("Opening Excel Document");
    }
}

// Factory Class
abstract class DocumentFactory {
    abstract Document createDocument();
}

class WordFactory extends DocumentFactory {
    Document createDocument() {
        return new WordDocument();
    }
}

class PdfFactory extends DocumentFactory {
    Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelFactory extends DocumentFactory {
    Document createDocument() {
        return new ExcelDocument();
    }
}

public class Main {
    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordFactory();
        Document word = wordFactory.createDocument();
        word.open();

        DocumentFactory pdfFactory = new PdfFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        DocumentFactory excelFactory = new ExcelFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
    }
}
