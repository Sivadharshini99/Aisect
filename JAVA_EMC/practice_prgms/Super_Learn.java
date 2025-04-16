//parent cls
class Monkey{
	
	//variable/Fields
	int age=5;
	
	//constructor
	public Monkey( String name) {
		System.out.println(name);
	}
	
	//method
	public void makeSound() {
		System.out.println("makes sound");

	}
}
//child cls
class Zebra extends Monkey{
	//constructor
	public Zebra() {
		super("Monkey");//calls parent cls constructor
		super.makeSound();//calls parent cls method
		System.out.println(super.age);//calls parent cls variable/fields
		System.out.println("zebra");
	}
}
public class Super_Learn {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
      //obj
		Zebra z1=new Zebra();
	
		
	}

}
