

public class Students {
    String name;

    //method
    void setName(String studentName){
        name=studentName;
    }
   public static void main(String[] args) {
    //obj.Creation
    Students student1=new Students();
    Students student2=new Students();
    
    //giving values using methods
    student1.setName("siva");
    student2.setName("dharshu");

    System.out.println(student1.name);
    System.out.println(student2.name);
   }
}
