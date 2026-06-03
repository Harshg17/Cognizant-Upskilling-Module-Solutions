import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Task33 {

    private static final String URL =
            "jdbc:mysql://localhost:3306/college";
    private static final String USER = "root";
    private static final String PASSWORD = "Harsh@87707";

    public static void transferMoney(
            int fromAccount,
            int toAccount,
            double amount) {

        Connection con = null;

        try {

            con = DriverManager.getConnection(
                    URL, USER, PASSWORD);

            // Start Transaction
            con.setAutoCommit(false);

            String debitQuery =
                    "UPDATE accounts SET balance = balance - ? " +
                    "WHERE account_id = ?";

            String creditQuery =
                    "UPDATE accounts SET balance = balance + ? " +
                    "WHERE account_id = ?";

            // Debit Source Account
            PreparedStatement debitStmt =
                    con.prepareStatement(debitQuery);

            debitStmt.setDouble(1, amount);
            debitStmt.setInt(2, fromAccount);

            int debitRows = debitStmt.executeUpdate();

            // Credit Destination Account
            PreparedStatement creditStmt =
                    con.prepareStatement(creditQuery);

            creditStmt.setDouble(1, amount);
            creditStmt.setInt(2, toAccount);

            int creditRows = creditStmt.executeUpdate();

            // Commit if both succeed
            if (debitRows > 0 && creditRows > 0) {
                con.commit();
                System.out.println("Transaction Successful!");
            } else {
                con.rollback();
                System.out.println("Transaction Failed. Rolled Back.");
            }

            debitStmt.close();
            creditStmt.close();

        } catch (Exception e) {

            try {
                if (con != null) {
                    con.rollback();
                    System.out.println(
                            "Transaction Rolled Back.");
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }

            System.out.println("Error: " + e.getMessage());

        } finally {

            try {
                if (con != null) {
                    con.setAutoCommit(true);
                    con.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {

        transferMoney(1, 2, 1000);
    }
}