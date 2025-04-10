public class For_each {
    public static void main(String[] args) {
        int[] a={1,2,4,5};
        String cars[]={"volvo","audi"};
        System.out.println(a);//type and hash code would be printed
        for (int i = 0; i<4; i++) {
            System.out.println(a[i]);
            
        }
        for (int i : a) {
            System.out.println(i);
        }
        for (String carresult : cars) {
            System.out.println(carresult);
        }
    }
}
