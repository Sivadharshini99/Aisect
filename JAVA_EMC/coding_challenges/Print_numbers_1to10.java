package coding_challenges;

import java.util.Scanner;

public class Print_numbers_1to10 { 
    public static void main(String[] args) {
        //to print numbers 1 to 10
        for (int i = 1; i <=10; i++) {
            System.out.println(i);
        }
        //to print numbers in reverse from 5 to 1
        for (int i = 5; i>=1; i--) {
            System.out.println(i);
        }
        //using scanner class
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter 2 numbers");
        int a=scanner.nextInt();
        int b=scanner.nextInt();
        for (int i = a; i<=b; i++) {
            System.out.println(i);
        }

    } 
    
}
