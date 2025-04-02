//sum of array
import java.util.Scanner;

public class Array_sum {
    public static void main(String[] args) {
        //array
        int[] num = new int[5];
        Scanner scanner=new Scanner(System.in);
        System.out.println("enter 5 numbers");
         num[0]=scanner.nextInt();
         num[1]=scanner.nextInt();
         num[2]=scanner.nextInt();
         num[3]=scanner.nextInt();
         num[4]=scanner.nextInt();
        int total=num[0]+num[1]+num[2]+num[3]+num[4];
        System.out.println(total);
    }
}
