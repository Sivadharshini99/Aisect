package coding_challenges;
abstract class Animal{
	String name;
 	abstract void makeSound();//abstract method
 	//constructor
 	public Animal(String name) {
		this.name=name;
//		System.out.println(name);
		
	}
}
class Dogs extends Animal{
	//constructor calling
	public Dogs(String name) {
		// TODO Auto-generated constructor stub
		super(name);
	}
	@Override
	void makeSound() {
		System.out.println("bow bow");
		
	}
}
class Cats extends Animal{
	//constructor
  public Cats(String name) {
	// TODO Auto-generated constructor stub
	  super(name);
}
	@Override
	void makeSound() {
		System.out.println("mow meow");
		
	}
	
}
public class Abstract_Animal {
	
	public static void main(String[] args) {
		// obj
		Cats c1=new Cats("cat");
		System.out.println(c1.name);
		c1.makeSound();
		Dogs d1=new Dogs("meow");
		System.out.println(d1.name);
		d1.makeSound();

	}

}
