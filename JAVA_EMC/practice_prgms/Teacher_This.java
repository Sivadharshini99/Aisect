
public class Teacher_This {

	String name;
	public Teacher_This() {
		// TODO Auto-generated constructor stub
		System.out.println("hi");
	}
	public void setName(String name) {
		this.name=name;
		System.out.println(name);
		
	}
	void testName(String name) {
		this.name=name;
		System.out.println(name);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
     //obj
		Teacher_This obj1=new Teacher_This();
		obj1.setName("siva");
		System.out.println(obj1.name);
		obj1.testName("priya");
		System.out.println(obj1.name);
		
	}

}
