package coding_challenges;

public class Counter {
	static int count=0;//static var
	int instanceNo=0;//non-static var
	
	//constructor
	public Counter() {
		count=count+1;
		instanceNo=instanceNo+1;
	}
	void disp() {
		System.out.println("Count:" + count);
		System.out.println("InstanceNo:"+instanceNo);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       Counter c1=new Counter();
       c1.disp();
       Counter c2=new Counter();
       c2.disp();
       Counter c3=new Counter();
       
       c3.disp();
	}

}
