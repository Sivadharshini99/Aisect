public class Functions {

    public void greet(){
        System.out.println("Welcome");
        greet2();
    }
    public void greet2(){
        System.out.println("Siva");
    }
    public static void main(String[] args) {
        //obj
        Functions obj1=new Functions();
        obj1.greet();
    }
}
