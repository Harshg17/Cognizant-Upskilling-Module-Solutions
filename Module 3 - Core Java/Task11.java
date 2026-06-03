import java.util.Scanner;

public class Task11 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Non-negative Integer:");
        int n = sc.nextInt();

        int result = 1;

        if(n < 0){System.out.println("Enter a Valid number");}

        if(n > 0){for(int i = 2 ; i <= n; i++){
            result *= i;
        }
        System.out.println("Factorial of " + n + " = " + result);
    }

        
    }
}
