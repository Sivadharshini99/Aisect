package coding_challenges;

import java.util.Scanner;

public class Megna {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter your input");
        String meghana=scanner.nextLine();
        if(meghana.equals("dead")){
            System.out.println("surya meets ramya");
        }
        else{
            System.out.println("surya weds meghana");
        }
    }
}
