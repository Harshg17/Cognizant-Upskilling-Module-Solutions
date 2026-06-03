import java.util.Random;
import java.util.Scanner;

public class Task10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random random = new Random();

        int secretNumber = random.nextInt(100) + 1; 
        int guess;

        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("Guess a number between 1 and 100.");

        do {
            System.out.print("Enter your guess: ");
            guess = sc.nextInt();

            if (guess < 1 || guess > 100) {
                System.out.println("Please enter a number between 1 and 100.");
                continue;
            }

            if (guess > secretNumber) {
                System.out.println("Too high! Try again.");
            } 
            else if (guess < secretNumber) {
                System.out.println("Too low! Try again.");
            } 
            else {
                System.out.println("Congratulations! You guessed the number correctly.");
            }

        } while (guess != secretNumber);

        sc.close();
    }
}