import java.util.Random;

public class For_while {
    public static void main(String[] args) {
        for (int i = 1; i<=10; i++) {
            System.out.println(i);
        }
         int i=1;
        while (i<=10) {
            System.out.println(i);
            i++;
        }
        //random numbers
        //obj.creation 
        Random randnumb=new Random();
        int newnum=0;
        while (newnum!=5) {
             newnum=randnumb.nextInt(11);
            System.out.println(newnum);
            
        }
        //math.fn
        int randNum=(int)(Math.random()*101);
        System.out.println(randNum);
        //loop
        int randnum=0;
        while (randnum!=5) {
            randnum=(int)(Math.random()*101);
         System.out.println(randnum);
            
        }
        int count=1;
        do {
            System.out.println(count);
            count=count+1;
        } while (count<1);
    }
}
