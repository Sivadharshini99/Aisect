public class Method_overloading {

    void sum(int a,int b){
        System.out.println(a+b);
    }
    void sum(int a,int b,int c){
        System.out.println(a+b+c);
    }
    public static void main(String[] args) {
        //obj
        Method_overloading result=new Method_overloading();
        result.sum(4, 6);
        result.sum(3, 4,7);
    }
}
