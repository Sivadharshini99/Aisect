//hybrid
class Animal{
	 void eat() {
		// TODO Auto-generated method stub
System.out.println("eats");
	}
}
 class Dog extends Animal{
	 void bark() {
		// TODO Auto-generated method stub
System.out.println("barks");
	}
 }
 class Cat extends Animal{
	  void meow() {
		// TODO Auto-generated method stub
System.out.println("meows");
	}
 }
 class Puppy extends Dog{
	 void weep() {
		 System.out.println("weeps");
	 }
 }

  class Inheritance {
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//obj
		Puppy obj1=new Puppy();
		obj1.weep();
		obj1.eat();
		obj1.bark();

	}

}
