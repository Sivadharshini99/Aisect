
// Get input for salary and age. If salary greater than or equal to 20000 or age less than or equal to 25, get input for required loan amount. If not print you are not eligible for loan.

// If required loan amount is less than or equal to 50,000 print You are eligible for loan. If it is greater than 50,000 print maximum loan amount is 50000

package coding_challenges;

import java.util.Scanner;

public class Salary_age {
    public static void main(String[] args) {
          Scanner scanner=new Scanner(System.in);
        System.out.println("enter your salary");
        int salary=scanner.nextInt();
        System.out.println("enter your age");
        int age=scanner.nextInt();

        //or condition -- either if one of the condition is true
       if (salary>=20000 || age<=25) {
        System.out.println("enter your required loan amount");  
        int loanamount=scanner.nextInt();

        if (loanamount<=50000) {
            System.out.println("you are eligible for laon");
        } else{
               System.out.println("maximum loan amount is 50000");
        }
       }
       else{
        System.out.println("you are not eligible for loan");
       }

    }
}
