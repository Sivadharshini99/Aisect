package coding_challenges;
//parent cls
class Person{
	String name;
	
	//constructor
	public Person(String name){
		this.name=name;
		System.out.println(name);
	}
}
//sub cls
class Employee extends Person2{
	int employeeId;
	//constructor
	public Employee() {
		super("siva");		
	}
	//method
	void employee(int employeeId) {
	 System.out.println(employeeId);
	}
}

public class Super_Keyword {

	public static void main(String[] args) {
		//obj
		Employee e1=new Employee();
		e1.employee(23);
		
    
	}

}
