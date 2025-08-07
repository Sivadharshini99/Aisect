class Dummy2 implements Runnable{

	@Override
	public void run() {
		System.out.println("hii");
		
	}
	
}
public class Runnable_learn {

	public static void main(String[] args) {
		Dummy2 d2=new Dummy2();
		//class for thread
		Thread t1=new Thread(d2);
		t1.start();

	}

}
