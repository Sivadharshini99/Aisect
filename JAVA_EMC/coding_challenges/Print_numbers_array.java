package coding_challenges;

import java.util.Scanner;

public class Print_numbers_array {
 public static void main(String[] args) {
    //array
    int[] num = new int[5];
    Scanner scanner=new Scanner(System.in);
    System.out.println("enter 5 numbers");
    for (int i = 0; i<=4; i++) { //index range 0-4 =>for 5 input values
        num[i]=scanner.nextInt();//input from user
    }
    System.out.println("the numbers are");
    for (int i = 0; i<=4; i++) {
        System.out.println(num[i]);//print i
    }

    //print 10 numbers from array using for loop
    int[] numbers=new int[10];
   // Scanner scanner=new Scanner(System.in);
    System.out.println("enter 10 numbers");
    for (int i = 0; i<=9; i++) {
        numbers[i]=scanner.nextInt();     
    }
    System.out.println("the numbers are");
    for (int i = 0; i<=9; i++) {
        System.out.println(numbers[i]);  
    }

     //middle value if array
     System.out.println("enter size of an array");
     int size=scanner.nextInt();
     int[] arrSize=new int[size];//array
     System.out.println("enter the values");
     for (int i = 0; i<size; i++) {
        arrSize[i]=scanner.nextInt();
     }
     System.out.println("the middle value of array is " + arrSize[size/2]);
    
 }   
}
