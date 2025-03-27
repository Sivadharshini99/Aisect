public class Patternprblm {
    public static void main(String[] args) {
        //outer loop 
        for (int i=1;i<=2;i++) {
            System.out.println("outer:" +i);
            
            //inner loop (runs 3 times for each outer loop)
            for (int j=1;j<=3;j++) {
                System.out.println("inner:" +j);
            }
        }
        //for-each loop

        String[] bikes={"yahama","ducati","harley"};

        //using for-each loop to print all bikes
        for(String bike:bikes){
            System.out.println(bike);
        }

        //break
        for(int i=0;i<10;i++){
            if(i==4){
                break;
            }
            System.out.println(i);//exits the loop when i is 4
        }
        System.out.println("loop exited");

        //continue
        int i=0;
        while(i<10){
            i++;
            if(i==6){
                continue;
            }
            System.out.println(i);
        }
    }
}

