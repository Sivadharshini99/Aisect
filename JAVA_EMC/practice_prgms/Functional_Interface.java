interface A{
	void disp();
}
interface B{
	void show();
}
public class Functional_Interface {
	
public static void main(String[] args) {
	A obj=new A() { //direct obj creation and calling

		@Override
		public void disp() {
			System.out.println("hi");		
		}	
	};
	
	obj.disp();//method call
	
	//lambda expression
	B obj2=()->{
		System.out.println("showing data");
	};
	obj2.show();;//method call
}
}
