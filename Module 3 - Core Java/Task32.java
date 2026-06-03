import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;


public class Task32 {

    

    public static void main(String[] args) {
        StudentDAO dao = new StudentDAO();
        dao.insertStudent(4, "Harsh", 21);
        dao.updateStudent(4, "Harsh Gupta", 22);
    }
}




class StudentDAO {

    private static final String URL =
            "jdbc:mysql://localhost:3306/college";
    private static final String USER = "root";
    private static final String PASSWORD = "Harsh@87707";

    public Connection getConnection() throws Exception {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // Insert Student
    public void insertStudent(int id, String name, int age) {

        String sql =
                "INSERT INTO students(id, name, age) VALUES (?, ?, ?)";

        try (
                Connection con = getConnection();
                PreparedStatement ps = con.prepareStatement(sql)
        ) {

            ps.setInt(1, id);
            ps.setString(2, name);
            ps.setInt(3, age);

            int rows = ps.executeUpdate();

            if (rows > 0) {
                System.out.println("Student inserted successfully.");
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    // Update Student
    public void updateStudent(int id, String newName, int newAge) {

        String sql =
                "UPDATE students SET name=?, age=? WHERE id=?";

        try (
                Connection con = getConnection();
                PreparedStatement ps = con.prepareStatement(sql)
        ) {

            ps.setString(1, newName);
            ps.setInt(2, newAge);
            ps.setInt(3, id);

            int rows = ps.executeUpdate();

            if (rows > 0) {
                System.out.println("Student updated successfully.");
            } else {
                System.out.println("Student not found.");
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}