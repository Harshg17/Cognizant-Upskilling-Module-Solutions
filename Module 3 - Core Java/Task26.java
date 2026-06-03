class MyThread extends Thread {
    private String message;

    MyThread(String message) {
        this.message = message;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - " + i);
        }
    }
}

public class Task26 {
    public static void main(String[] args) {

        MyThread thread1 = new MyThread("Thread 1 is running");
        MyThread thread2 = new MyThread("Thread 2 is running");

        thread1.start();
        thread2.start();
    }
}