import java.util.Scanner;
public class Marks {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        String name=scanner.nextLine();
        String department=scanner.nextLine();
        System.out.println("enter your score");
        double score=scanner.nextDouble();
        scanner.nextLine();//int after string extra space storing
        String address=scanner.nextLine();
        double result=score/10;
        System.out.println("my score is " + result + "/10");

        //another wAY
        System.out.println("enter your another score");
        double score2=scanner.nextDouble();
        System.out.println("my another score is " + score2/10 + "/10");
    }
}
