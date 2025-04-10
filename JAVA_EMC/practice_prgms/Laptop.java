public class Laptop {
    String name="";
    String procs="";
    int price=0;
    int ram=0;
    public static void main(String[] args) {
        //obj.creation
        Laptop lap1=new Laptop();
        lap1.name="hpp";
        lap1.price=30000;
        System.out.println(lap1.price);
        //second obj
        Laptop lap2=new Laptop();
        lap2.name="wpp";
        lap2.price=80000;
        System.out.println(lap2.name);
        //third obj
        Laptop lap3=new Laptop();
        System.out.println(lap3.price);//default value


    }
}
