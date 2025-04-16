package coding_challenges;

class Vehicle{
	int brand,year;
	
	public void startEngine() {
		
	}
}

class Car extends Vehicle{
	String fuelType;
	
	@Override
	public void startEngine() {
		System.out.println("car engine starts");
	}
	public void drive() {
		System.out.println("car is driving");
	}
}
class Truck extends Vehicle{
	int loadCapacity;
	
	@Override
	public void startEngine() {
		System.out.println("truck engine starts");	
		}
	public void haul() {
		System.out.println("truck is hauling");

	}
}


public class Vehicle_Inheritence {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Car c1=new Car();
		c1.startEngine();
		c1.drive();
		Truck t1=new Truck();
		t1.startEngine();
		t1.haul();
		

	}

}
