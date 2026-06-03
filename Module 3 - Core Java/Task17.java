class Car{
    String make;
    String model;
    int year;

    void displayDetails(){
        System.out.println("Make :" + make);
        System.out.println("Model :" + model);
        System.out.println("Year :" + year);
        System.out.println();
    }
}


public class Task17 {
    public static void main(String[] args) {
        Car c1 = new Car();
        c1.make = "Ford";
        c1.model = "EcoSport";
        c1.year = 2020;

        c1.displayDetails();
    }
}
