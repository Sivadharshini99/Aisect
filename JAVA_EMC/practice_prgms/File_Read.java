import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class File_Read {

	public static void main(String[] args) {
		try {
			FileReader fr=new FileReader("output.txt");
//			int c=fr.read();
//			System.out.println(c);
//			System.out.println((char)c);//type casting
			
//			while(c!=-1) {
//				System.out.println((char)c);
//				c=fr.read();
//			}
//			fr.close();
			
			BufferedReader bw=new BufferedReader(fr);
			String line=bw.readLine();
			while(line!=null) {
				System.out.println(line);
				line=bw.readLine();
			}
			bw.close();
		} catch (Exception e) {
			System.out.println(e);
		}

	}

}
