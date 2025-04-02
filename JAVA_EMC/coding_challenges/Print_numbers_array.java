package coding_challenges;

import java.util.Scanner;

public class Print_numbers_array {
 public static void main(String[] args) {
    //array
    int[] num = new int[5];
    Scanner scanner=new Scanner(System.in);
    System.out.println("enter 5 numbers");
    for (int i = 0; i<=4; i++) {
        num[i]=scanner.nextInt();//input from user
    }
    System.out.println("the numbers are");
    for (int i = 0; i<=4; i++) {
        System.out.println(num[i]);//print i
    }
 }   
}
