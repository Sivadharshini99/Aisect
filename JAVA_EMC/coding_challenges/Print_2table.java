package coding_challenges;

import java.util.Scanner;

public class Print_2table {
    public static void main(String[] args) {
       
        for (int i = 1; i <=12; i++) {
           // System.out.println(2*i);
            System.out.println("2x" + i +"=" + 2*i); 
        }
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter the number");
        int num=scanner.nextInt();
        for (int i = 1; i <=12; i++) {
             System.out.println(num + "x" + i +"=" + num*i); 
         }
         
    }
}
