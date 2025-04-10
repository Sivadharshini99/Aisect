package coding_challenges;

public class Fn_parameter {

    void sum(int a, int b){
       System.out.println(a+b);
    }
    void sub(int a, int b){
       System.out.println(a-b);
    }
    void mul(int a, int b){
       System.out.println(a*b);
    }
    void div(int a, int b){
       System.out.println(a/b);
    }
    public static void main(String[] args) {
        //obj
        Fn_parameter result=new Fn_parameter();
        result.sum(5, 3);
        result.sub(4, 2);
        result.mul(2, 3);
        result.div(10, 5);
    }
}
