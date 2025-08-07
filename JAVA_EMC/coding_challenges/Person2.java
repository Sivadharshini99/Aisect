package coding_challenges;
class Persons{
	public String name;
	protected int age;
	private int socialSecurityNo;
	String address;
	public Persons(String name,int age,int socialSecurityNo,String address) {
	this.name=name;
	this.age=age;
	this.socialSecurityNo=socialSecurityNo;
	this.address=address;
	}

}
class Employees extends Persons{
	public Employees(String name,int age,int socialSecurityNo,String address) {
		super(name,age,socialSecurityNo,address);
		
	}
}
public class Person2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//obj
		Employees e1=new Employees("riya",23,345,"123,gb st");
		System.out.println(e1.name);
		System.out.println(e1.age);
//	System.out.println(e1.socialSecurityNo);
		System.out.println(e1.address);

	}

}
