package coding_challenges;

public class Addition_fn {
    int a=10;
    int b=20;
    int apple_price=20;
    int apple_count=5;

    void sum(){
         System.out.println(a+b);
    }
    void total_money(){
        System.out.println(apple_count*apple_price);
    }
    public static void main(String[] args) {
        //obj
        Addition_fn result=new Addition_fn();
        result.sum();
        result.total_money();
    }
}
