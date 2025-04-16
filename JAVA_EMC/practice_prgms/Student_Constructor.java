
public class Student_Constructor {
	int marks;
	String name;
	
	Student_Constructor(){
		System.out.println("hi");
	}
	Student_Constructor(int marks2,String name2){
		System.out.println(marks2);
		System.out.println(name2);
	}
    
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
      //obj
		Student_Constructor obj1=new Student_Constructor();
		Student_Constructor obj2=new Student_Constructor(89,"siva");
		
		System.out.println(obj1.marks);
		System.out.println(obj2.name);
	}

}
