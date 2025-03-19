import java.util.Scanner;

public class Armstrong {
     // Step 1: Take input from user
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt(); // Read number
        sc.close(); // Close scanner to avoid memory leaks

         // Step 2: Store original number for comparison later
         int original = num;
         int sum = 0;
         int digit;
 
         // Step 3: Count the number of digits
         int digits = String.valueOf(num).length(); 
 
         // Step 4: Extract each digit and calculate sum of powers
         while (num > 0) {
             digit = num % 10; // Get last digit
             sum += Math.pow(digit, digits); // Raise digit to power of total digits and add
             num /= 10; // Remove last digit
         }
 
         // Step 5: Compare sum with original number
         if (sum == original)
             System.out.println(original + " is an Armstrong number.");
         else
             System.out.println(original + " is not an Armstrong number.");

    }
    
}
