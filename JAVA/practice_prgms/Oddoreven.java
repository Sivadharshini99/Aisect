package practice_prgms;

import java.util.Scanner;

public class Oddoreven {
    public static void main(String[] args) {
       Scanner scanner=new Scanner(System.in);
       System.out.println("enter the number");
       int num=scanner.nextInt();
       if(num%2==0){
        System.out.println("the given number is a even number");
       }else{
        System.out.println("odd number");
       }

    }
    
}
