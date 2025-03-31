package coding_challenges;

import java.util.Scanner;

public class Average_sum {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter your english mark");
        int engMark=scanner.nextInt();
        System.out.println("enter your tamil mark");
        int tamMark=scanner.nextInt();
        System.out.println("enter your maths mark");
        int matMark=scanner.nextInt();
        System.out.println("enter your cs mark");
        int csmark=scanner.nextInt();
        System.out.println("enter your science mark");
        int scienceMark=scanner.nextInt();
        //finding average marks of total numbers=>total sum of numbers / total sum of numbers
        int averagemark=(engMark+tamMark+matMark+csmark+scienceMark)/5;
      if(averagemark<35){
        System.out.println("additional class is required");
      }
      else{
        System.out.println("you are good to go");
      }
    }
}
