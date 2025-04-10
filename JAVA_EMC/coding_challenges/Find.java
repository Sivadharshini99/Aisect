package coding_challenges;

import java.util.Scanner;

public class Find {

    void evenorodd(int num){
     if(num%2==0){
        System.out.println("even");
     }
     else{
        System.out.println("odd");
     }
    }

    String passorfail(int score){
        if(score>=35){
            return "pass";
        }
        else{
            return "fail";
        }
    }
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);

       // Check even or odd
        System.out.println("enter a number");
        int num=scanner.nextInt();
        //obj.
        Find result=new Find();
        result.evenorodd(num);

        // Check pass or fail
        System.out.println("enter total mark");
        int tot_mark=scanner.nextInt();
        //obj
       Find school=new Find();
       String result2=school.passorfail(tot_mark);
       System.out.println(result2);

    }
}
