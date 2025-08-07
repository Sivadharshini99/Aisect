import java.util.Scanner;
class NotValidException extends Exception{
   //constructor
	public NotValidException(String str) {
		super(str);//parent cls--Exception
	}
	
}
public class Custom_Exception_Handling {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner=new Scanner(System.in);
		System.out.println("enter a number");
		try {
		int age=scanner.nextInt();
		if(age<18) {
			throw new NotValidException("you are not eligible to the party");
		}
		}
		catch(NotValidException e) {
			System.out.println(e);
		}
		catch(Exception e) {
			System.out.println(e);
		}

	}

}
