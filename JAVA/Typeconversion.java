
public class Typeconversion {
    public static void main(String[] args) {
        int a=9;
        float b=a;
        System.out.println(b); //widening or implict conversion-->small to big (no data loss)
        double c=9.8;
        int d=(int)c;//should explicitly[(int)c] tell how to type caste
        System.out.println(d);//narrowing or explicit conversion -->big to small(data loss occurs)

    }
}
