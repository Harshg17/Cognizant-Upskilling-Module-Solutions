import java.util.Scanner;

public class Task13 {
    static int fibonacci(int n){
        if(n == 0) return 0;

        else if(n == 1) return 1;

        else{
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number:");
        int n = sc.nextInt();

        if(n < 0){
            System.out.println("Please enter a Non-Negative Intreger.");
        }
        else{
            System.out.println("The " + n + "th Fibonacci number is:" + fibonacci(n));
        }

        sc.close();
    }
}
