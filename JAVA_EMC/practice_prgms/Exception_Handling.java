import java.util.Scanner;

public class Exception_Handling {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner=new Scanner(System.in);
		System.out.println("enter a number");
		try {
		int a=scanner.nextInt();
		int b=10/0;
	}
		catch(Exception e){
			System.out.println(e);
		}
		System.out.println("prgm ended");

}
}
