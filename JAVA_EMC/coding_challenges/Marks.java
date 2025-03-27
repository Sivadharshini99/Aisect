package coding_challenges;

import java.util.Scanner;

public class Marks {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter your mark");
        int mark=scanner.nextInt();
        if(mark>=35){
            System.out.println("pass");
        }
        else{
            System.out.println("fail");
        }
        //income prgm
        System.out.println("enter your income");
        int income=scanner.nextInt();
        if(income>7000){
            System.out.println("scholarship available");
        }
        else{
            System.out.println("scholarship not available");
        }
    }
}
