class Calc{
	 void div() throws Exception{
		int a=10/0;// i know it's gonna have some error
	}
}
public class Throws_Learn {
public static void main(String[] args)  {
	Calc c1=new Calc();
	try {
		c1.div();
	} catch (Exception e) {
//		e.printStackTrace();//tool method-to handle exceptions and give error number lines
		System.out.println(e);
	}

}
}
