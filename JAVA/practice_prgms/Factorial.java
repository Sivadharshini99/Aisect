package practice_prgms;

public class Factorial {
    public static void main(String[] args) {
        int num=5;//number to find the factorial
        int result=factorial(num);//calling the function
        System.out.println(num + "!=" + result);
    }
   public static int factorial(int n){
    if (n==1) {//base condition-stops recursion when n reaches 1
        return 1;
    }else{
        return n* factorial(n-1);//recursive call
    }
   }
}
