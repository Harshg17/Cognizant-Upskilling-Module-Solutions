class Animal{
    void makeSound(){
        System.out.println("All Animals make sound");
    }
}

class Dog extends Animal{
    @Override
    void makeSound(){
        System.out.println("Dog barks: woof woof!");
    }
}


public class Task18 {
    public static void main(String[] args) {
        System.out.println("Animal Class");
        Animal a = new Animal();
        a.makeSound();

        System.out.println();
        System.out.println("Dog Class");

        Dog d = new Dog();
        d.makeSound();
    }
}
