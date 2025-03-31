package coding_challenges;

import java.util.Scanner;

public class Number_divisible_by_3or5 {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter the number");
        int num=scanner.nextInt();
        //logical operation
        //to check both conditions and both should return true -- logical AND(&&)
        if (num%3==0 && num%5==0) {
            System.out.println("the given num is divisible by both 3 and 5");
        }
        else{
            System.out.println("the given num is not divisible by both 3 and 5");
        }


//alternative way- using nested-if
// if (num%3==0) {
//     if (num%5==0) {
//         System.out.println("the given num is divisible by both 3 and 5");
//     }           
// }
// else{
//     System.out.println("the given number is not divisible by 3 and 5");
// }

    }
}
