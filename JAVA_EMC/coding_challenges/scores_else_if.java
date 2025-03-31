package coding_challenges;

import java.util.Scanner;

public class scores_else_if {
    public static void main(String[] args) {
          Scanner scanner=new Scanner(System.in);
        System.out.println("enter your score");
        int score=scanner.nextInt();
        // if (score>35) {
        //     System.out.println("Gift:video game");
        // } 
        // else if(score>65){
        //     System.out.println("Gift:Iphone");
        // }
        // else if(score>90){
        //     System.out.println("Gift:Macbook pro");
        // }
        
        // else {
        //      System.out.println("Gift:Nothing");   
        // }

        //coding challenge
        if (score<50 && score>=25) {
            System.out.println("you need to improve");
        } 
        else if(score>=50 && score<=70){
            System.out.println("good job");
        }
        else if(score>70){
            System.out.println("excellence performance");
        }
        
        else {
             System.out.println("Fail");   
        }
    }
}
