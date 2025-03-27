public class Stringprgm {
    public static void main(String[] args) {
        String f1="apple";//stored in string pool
        String f2="apple";
        //obj.creation -->new keyword
        String f3=new String("apple");//both are same but will be created as object and stored in different address in heap(objects)
        System.out.println(f1==f2);//refernce no(address of data is compared)
        System.out.println(f1==f3);
        System.out.println(f1.equals(f3));//values of data is compared


    }
}
