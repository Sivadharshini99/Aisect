package coding_challenges;

import java.util.Scanner;

class InvalidAgeException extends Exception{
	public InvalidAgeException(String msg) {
		super(msg);
	}
}
class AgeValidator{
	 void checkAge(int age) {
		try {
			if(age<=0 || age>150) {
				throw new InvalidAgeException("you are not eligible");
			}
			else {
				System.out.println("eligible");
			}
		}
		catch(Exception e) {
			System.out.println(e);
		}

	}
}

public class Invalid_Exception {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner=new Scanner(System.in);
		System.out.println("enter a number");
		int age=scanner.nextInt();
		AgeValidator a1=new AgeValidator();
		a1.checkAge(age);

	}

}
