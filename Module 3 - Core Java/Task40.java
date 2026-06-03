import java.util.ArrayList;
import java.util.List;

public class Task40 {

    public static void main(String[] args)
            throws InterruptedException {

        final int THREAD_COUNT = 100_000;

        List<Thread> threads = new ArrayList<>();

        long start = System.currentTimeMillis();

        for (int i = 0; i < THREAD_COUNT; i++) {

            int id = i;

            Thread t = Thread.startVirtualThread(() -> {

                // Print only first few threads
                if (id < 10) {
                    System.out.println(
                            "Virtual Thread " + id +
                            " running..."
                    );
                }
            });

            threads.add(t);
        }

        // Wait for all threads to finish
        for (Thread t : threads) {
            t.join();
        }

        long end = System.currentTimeMillis();

        System.out.println(
                "\nVirtual Threads Created: "
                        + THREAD_COUNT);

        System.out.println(
                "Execution Time: "
                        + (end - start) + " ms");
    }
}