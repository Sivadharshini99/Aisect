package coding_challenges;

import java.util.Scanner;

public class Odd_or_even {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter the number");
        int num=scanner.nextInt();
        if(num%2==0){
            System.out.println("the given number " + num + " is even number");
        }else{
            System.out.println("the given number " + num + " is odd number");
        }
    }
}
