import java.lang.System;//lang->package,system->class inside lang package to access system properties
import java.util.Scanner;//util->package,scanner->class inside util package to access scanner properties
public class scannerprgm {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.print("enter the nums");
        int a=scanner.nextInt();
        int b=scanner.nextInt();
        int c=a+b;
        String str =" the sum is ";
        // System.out.println("the sum is "+ c);
    System.out.println(str + c);//string concatenation

        scanner.close();// Always close the scanner to avoid resource leaks
    }
}
