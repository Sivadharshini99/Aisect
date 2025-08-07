
interface Printable{
	void display();
}

interface Showable{
	void display();
}

class Document implements Printable,Showable{
	
	@Override
	public void display() {
		System.out.println("print and show");
		
	}
	
}

public class MultipleInheritance_Interface {

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//obj
			Document d1=new Document();
			d1.display();

	}

}
