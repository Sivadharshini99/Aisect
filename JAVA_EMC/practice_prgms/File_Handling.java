//write file
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class File_Handling {

	public static void main(String[] args) {
		try {
			FileWriter fw=new FileWriter("output.txt");
//			fw.write("hello");
//			fw.append("siva");
//			fw.close();
			BufferedWriter bw=new BufferedWriter(fw);
			bw.write("mango");
			bw.newLine();
			bw.write("bye");
			bw.close();
			System.out.println("success");
		} catch (IOException e) {
			System.out.println(e);
		}
	}

}
