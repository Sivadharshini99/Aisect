package coding_challenges;
class Animals{
	
	String name;
	int age;
	
	 void makeSound() {
		System.out.println("animal makes a sound");
	}
}
class Dog extends Animals{
	String breed;
	
	@Override
	void makeSound() {
	System.out.println("dog barks");
	}
	
	
	void fetch(){
		System.out.println("dog is fetching");
	}
}
class Cat extends Animals{
	String color;
	@Override
	void makeSound() {
		System.out.println("cat meows");
	}
	void climb(){
		System.out.println("cat is climbing");
	}
}
 class Inheritance {
	 
	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Dog a1=new Dog();
        a1.breed="pom";
        a1.age=6;
         a1.makeSound();
         a1.fetch();
         Cat c1=new Cat();
         c1.makeSound();
         c1.climb();
         
	}

}
