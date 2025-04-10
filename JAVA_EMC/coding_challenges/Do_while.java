package coding_challenges;

import java.util.Scanner;

public class Do_while {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        int a=0;
        do {
            System.out.println("enter number greater than 10");
            a=scanner.nextInt();
        } while (a<10);
    }
}
