import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Task41 {

    public static void main(String[] args) {

        ExecutorService executor =
                Executors.newFixedThreadPool(3);

        List<Future<Integer>> results =
                new ArrayList<>();

        // Submit Callable tasks
        for (int i = 1; i <= 5; i++) {

            int number = i;

            Callable<Integer> task = () -> {
                return number * number;
            };

            Future<Integer> future =
                    executor.submit(task);

            results.add(future);
        }

        // Retrieve results
        System.out.println("Task Results:");

        for (Future<Integer> future : results) {
            try {
                System.out.println(
                        future.get()
                );
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        executor.shutdown();
    }
}