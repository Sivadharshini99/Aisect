package coding_challenges;

import java.util.Scanner;

public class ExceptionHandling {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner=new Scanner(System.in);
		System.out.println("enter 2 number");
		try {
		int a=scanner.nextInt();
		int b=scanner.nextInt();
		System.out.println(a/b);
		}
		catch(Exception_Learn e) {
			System.out.println(e);
		}
		finally {
       System.out.println("prgm ended");
		}
	}

}
