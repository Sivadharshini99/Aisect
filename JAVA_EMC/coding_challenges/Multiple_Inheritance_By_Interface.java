package coding_challenges;

interface Readable{
	void read();
}

interface Writable{
	void write();
}

interface Storable{
	void store();
}
class File implements Readable,Writable,Storable{

	@Override
	public void store() {
		System.out.println("Store");
		
	}

	@Override
	public void write() {
		System.out.println("write");
		
	}

	@Override
	public void read() {
		System.out.println("read");
		
	}
	
}
public class Multiple_Inheritance_By_Interface {

	public static void main(String[] args) {
		//obj
		File f1=new File();
		f1.read();
		f1.write();
		f1.store();
		
	}

}
