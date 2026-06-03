interface Playable {
    void play();
}

class Guitar implements Playable {

    @Override
    public void play() {
        System.out.println("Playing the Guitar");
    }
}

class Piano implements Playable {

    @Override
    public void play() {
        System.out.println("Playing the Piano");
    }
}

public class Task19 {
    public static void main(String[] args) {

        Guitar guitar = new Guitar();
        Piano piano = new Piano();

        guitar.play();
        piano.play();
    }
}
