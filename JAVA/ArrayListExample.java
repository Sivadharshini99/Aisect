import java.util.ArrayList;

public class ArrayListExample {
     public static void main(String[] args) {
    ArrayList<String> names=new ArrayList<>();
    names.add("John");
    names.add("Alice");
    names.add("Bob");
    System.out.println("Initially added names:"+names);
    names.remove("Bob");
    System.out.println("After removing 'Bob':"+names);

    int index=names.indexOf("Alice");
    if (index!=-1){
        names.set(index,"Rock");

    }
    System.out.println("Final updated names:"+ names);

    }
}
