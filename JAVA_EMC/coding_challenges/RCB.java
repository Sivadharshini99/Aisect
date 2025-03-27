package coding_challenges;

import java.util.Scanner;

public class RCB {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter your input");
        String RCB=scanner.nextLine();
        if (RCB.equals("win")) {
            System.out.println("won the cup");
        } else {
            System.out.println("cup ila");
        }
        
    }
}
