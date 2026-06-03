import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

public class ReflectionDemo {

    public static void main(String[] args) {

        try {

            // Load class dynamically
            Class<?> cls = Class.forName("Employee");

            System.out.println("Class Name: "
                    + cls.getName());

            System.out.println("\nMethods:");

            Method[] methods =
                    cls.getDeclaredMethods();

            for (Method method : methods) {

                System.out.println(
                        "\nMethod Name: "
                                + method.getName());

                Parameter[] params =
                        method.getParameters();

                System.out.println(
                        "Number of Parameters: "
                                + params.length);

                for (Parameter p : params) {
                    System.out.println(
                            "Parameter: "
                                    + p.getType().getSimpleName()
                    );
                }
            }

            // Create object dynamically
            Object obj =
                    cls.getDeclaredConstructor()
                            .newInstance();

            // Invoke greet() dynamically
            Method greetMethod =
                    cls.getMethod("greet");

            System.out.println(
                    "\nInvoking greet()...");

            greetMethod.invoke(obj);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}