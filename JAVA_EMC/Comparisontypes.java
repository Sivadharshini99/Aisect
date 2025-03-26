import java.util.Scanner;

public class Comparisontypes {
    public static void main(String[] args) {
        int a=4,b=5;
        System.out.println(a>b);
        System.out.println(a<b);
        System.out.println(a==b);

        //alternate prgms
        if (a>b) {
            System.out.println("a is greater than b");
        } else {
            System.out.println("b is greater than a");
        }
        if (a==b) {
            System.out.println("a is equal b");
        } else {
            System.out.println("not equal");
        }
        //scanner class
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter 2 numbers");
        int num1=scanner.nextInt();
        int num2=scanner.nextInt();
        if (num1==num2) {
            System.out.println("num1 is equal to num2");
        } else {
            System.out.println("not equal");
        }
        if (num1>num2) {
            System.out.println("num1 is greater than num2");
        } else {
            System.out.println("num2 is greater than num1");
        }

    }

}
