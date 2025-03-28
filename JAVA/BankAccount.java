public class BankAccount {
    static void checkBalance(String name,double balance){
        System.out.println("Hello"+name+",Your account balance is:$"+balance);

    }
    public static void main(String[]args){
        checkBalance("Alice",5000);
        checkBalance("Bob",3000);
    }
}
