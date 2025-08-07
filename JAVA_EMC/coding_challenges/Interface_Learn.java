package coding_challenges;
interface Playable{
	void play();
}
class Guitar implements Playable{

	@Override
	public void play() {
		System.out.println("plays Guitar");
		
	}
	
}
class Piano implements Playable{
	@Override
	public void play() {
		System.out.println("plays Piano");
		
	}	
}
//Option: C combines both
class Both implements Playable{
	Piano piano=new Piano();
	Guitar guitar=new Guitar();
	
	@Override
	public void play() {
		piano.play();
		guitar.play();
		
	}
	
}
public class Interface_Learn {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//obj
		Piano p1=new Piano();
		p1.play();
		Guitar g1=new Guitar();
		g1.play();
		
		//option c
		Both b1=new Both();//one obj creation for both methods in diff classes
		b1.play();
		
	}

}
