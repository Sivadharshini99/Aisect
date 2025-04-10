public class Return {
     
    String getname(String name){
        return name;
    }
    int getPhone(int number){
        return number;
    }
    int sum(int a, int b){
        int c=a+b;
        return c;
    }
    public static void main(String[] args) {
        //obj.
        Return result=new Return();
       String value= result.getname("siva");
       System.out.println(value);
       int phno=result.getPhone(6899464);
       System.out.println(phno);
       int sum=result.sum(4,6);
       System.out.println(sum);

    }
}
