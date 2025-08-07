
class A1 extends Thread{
	public void run(){
		for(int i=0;i<=3;i++) {
		System.out.println("hi");
		try {
			Thread.sleep(10);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	}
}
class B1 extends Thread{
	public void run(){
		for(int i=0;i<=3;i++) {
			System.out.println("Bye");
			try {
				Thread.sleep(10);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}
	}
}
public class Threads_Learn {
	public static void main(String[] args) {
		A1 a1=new A1();
		B1 b1=new B1();
		
		//call
//		a1.run();
//		b1.run();
		a1.setPriority(10);
		b1.setPriority(2);
		a1.start();
		b1.start();
		

	}

}
