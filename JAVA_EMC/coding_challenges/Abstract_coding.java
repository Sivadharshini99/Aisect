package coding_challenges;
abstract class Vehicles{
	final void startEngine() {
		System.out.println("engine started");
	}
	static String getvehicleType() {
		return "siva";
	}
	abstract void drive();
}
class Car extends Vehicles{
	@Override
	void drive() {
		System.out.println("drives car");	
	}
}
class Motorcycle extends Vehicles{
	@Override
	void drive() {
		System.out.println("drives motorcycle");	
	}

}
public class Abstract_coding {
	
public static void main(String[] args) {
	//obj
	Motorcycle m1=new Motorcycle();
	m1.startEngine();
	m1.drive();
	System.out.println(Vehicles.getvehicleType());
	Car c1=new Car();
	c1.drive();
	
}
}
