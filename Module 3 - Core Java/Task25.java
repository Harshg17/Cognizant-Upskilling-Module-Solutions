import java.util.HashMap;
import java.util.Scanner;

public class Task25 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, String> studentInfo = new HashMap<>();

        System.out.print("Enter number of Student:");
        int n = sc.nextInt();
        sc.nextLine();

        for(int i = 0; i < n; i++){
            System.out.print("Enter Student ID:");
            int id = sc.nextInt();
            sc.nextLine();

            System.out.print("Enter Student Name:");
            String name = sc.nextLine();
            sc.nextLine();

            studentInfo.put(id, name);
        }

        System.out.print("Enter ID to Search:");
        int searchID = sc.nextInt();

        if(studentInfo.containsKey(searchID)){
            System.out.println("Student Name:" + studentInfo.get(searchID));
        }
        else{
            System.out.println("Student ID not Found!");
        }

        sc.close();

    }

    
}
