interface Animals3{
	int a=5;//final variable/field by default
	void sound();//abstract methods by default
	//JAVA 8 ADDITION--abstract method (body part)---using default and static keyword
	default void disp() {
		System.out.println("hi");
	}
	static void demo() {
		System.out.println("cat");
	}
}
class Cats implements Animals3{

	@Override
	public void sound() {
		System.out.println("meow");
		
	}
	
}
public class Interface {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       Cats c1=new Cats();
       c1.disp();
       Animals3.demo();//static-no obj call--clsname.methodname
       c1.sound();
       System.out.println(c1.
    		   a);
       
	}

}
