import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Task31 {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/college";
        String username = "root";
        String password = "Harsh@87707";

        try {
            
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection(url, username, password);

            System.out.println("Database Connected Successfully!");
            
            Statement stmt = connection.createStatement();

           
            ResultSet rs = stmt.executeQuery(
                    "SELECT * FROM students");

            
            System.out.println("\nStudent Records:");
            while (rs.next()) {
                System.out.println(
                        rs.getInt("id") + "  " +
                        rs.getString("name") + "  " +
                        rs.getInt("age"));
            }

            
            rs.close();
            stmt.close();
            connection.close();

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}