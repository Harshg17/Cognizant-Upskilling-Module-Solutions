import java.io.*;
import java.util.*;

public class Task23 {
    public static void main(String[] args) {
        try{
            File file = new File("output.txt");
            Scanner reader = new Scanner(file);

            System.out.println("Contents of output.txt:");

            while (reader.hasNextLine()) {
                String line = reader.nextLine();
                System.out.println(line);
            }

            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }
    }
}
