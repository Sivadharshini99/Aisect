package coding_challenges;

import java.util.Scanner;

public class Traffic_light {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter the color");
        String color=scanner.nextLine();
        switch (color) {
            case "red":
                System.out.println("stop");
                break;
            case "yellow":
                System.out.println("get ready");
                break;
            case "green":
                System.out.println("go");
                break;
        
            default:
            System.out.println("invalid color");
               
        }
        scanner.close();
    }
}
