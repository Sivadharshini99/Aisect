class Dummy extends Thread{
	int j=0;
	public void run() {
		j=50;
	}
}
public class Join_Learn {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
   Dummy d1=new Dummy();
   d1.start();
   if(d1.isAlive()) {
	   System.out.println("still executing");
   }
   try {
	d1.join();
} catch (InterruptedException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
   System.out.println(d1.j);
	}

}
