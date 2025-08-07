package coding_challenges;

import java.util.Scanner;

public class ThrowAndFinally {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner=new Scanner(System.in);
		System.out.println("enter a number");
		int age=scanner.nextInt();
		try {
			if(age<18) {
				throw new Exception_Learn("you are not eligible to vote");
			}
		}
		catch(Exception_Learn e) {
			System.out.println(e);
		}
		finally {
			System.out.println("voting ended");
		}
	}

}
