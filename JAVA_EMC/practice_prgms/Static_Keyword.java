
public class Static_Keyword {
	static int a=5;//static variable
	static String name="riya";
	
   static void disp() {//static method
	   System.out.println("hi");
   }
   static {
	   System.out.println("bye");//executed 1st when class first loaded and executes only once even when lot of obj. is created
   }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(a);
		a=9;
		System.out.println(a);
	Static_Keyword s1=new Static_Keyword();
	Static_Keyword s2=new Static_Keyword();
		System.out.println(name);
	Static_Keyword.name="puuu";
		System.out.println(name);
		disp();
		disp();
		Static_Keyword.disp();
		
	

	}

}
