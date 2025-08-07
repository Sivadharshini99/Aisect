import java.util.Scanner;

public class Throw_Finally {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		Scanner scanner=new Scanner(System.in);
		System.out.println("enter a number");
		int age=scanner.nextInt();
		if(age<18) {
			throw new Exception("you are not eligible to vote");
		}
		else {
			System.out.println("you are eligible to vote");
		}

	}

}
