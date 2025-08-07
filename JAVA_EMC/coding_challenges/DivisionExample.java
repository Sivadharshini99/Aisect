package coding_challenges;

import java.util.Scanner;

public class DivisionExample {
  private void divideNumbers(int a, int b) {
		try {
			int result=a/b;
			System.out.println(result);
		}
		catch(ArithmeticException e) {
			if(b==0) {
				System.out.println("cannot divide by 0");
			}
		}
		catch(Exception_Learn e) {
			System.out.println(e);
		}

		}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner scanner=new Scanner(System.in);
			System.out.println("enter 2 number");
			int a=scanner.nextInt();
			int b=scanner.nextInt();
			
			//obj
		DivisionExample d1=new DivisionExample();
		d1.divideNumbers(a,b);
	}

}
