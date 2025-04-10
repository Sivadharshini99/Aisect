package coding_challenges;

public class Mobile_function {
    void iphone(){
        System.out.println("this is iphone");
    }
    void oppo(){
        System.out.println("this is oppo");
    }
    void samsung(){
        System.out.println("this is samsung ");
    }
    public static void main(String[] args) {
        //obj.creation
        Mobile_function phone=new Mobile_function();
        phone.iphone();
        phone.oppo();
        phone.samsung();
    }
}
