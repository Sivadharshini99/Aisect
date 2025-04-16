
abstract class Vechicle{//abstract cls
	abstract void speed();//abstract method-->no body(no implementation/signature part);
	
	void brand() {
		System.out.println("Duke");//non-abstract method
	}
}
class Bike extends Vechicle{
	 @Override
	void speed() {
		System.out.println("25km milege");
		
	}
}
class demo extends Vechicle{

	@Override
	void speed() {
		System.out.println("34km");
		
	}
	
}

public class Abstract_Learn {

	public static void main(String[] args) {
	//obj
		demo d1=new demo();
		d1.brand();
		d1.speed();

	}

}
