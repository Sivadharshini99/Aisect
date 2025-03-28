public class checkAge {
     static void checkAges(int age) {
        if(age < 18){
            System.out.println("access denied-you are not old main");
        }
        else{
            System.out.println("access granted-you are old enough");
        }
    }
    public static void main(String[] args) {
        checkAges(16);
        checkAges(20);
    }
}
