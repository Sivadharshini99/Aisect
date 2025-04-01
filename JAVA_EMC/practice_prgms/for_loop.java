public class for_loop {
    public static void main(String[] args) {
        //to print numbers 1 to 5
        for (int i = 1; i <=5; i++) {
            System.out.println("siva");
        }

        //event count -- just count from 1 to 10
        int eventCount=0;
        for (int i = 1; i <=5; i++) {
            if (i%2==0) {
            }
            else{
                eventCount++;
            }
        }
        System.out.println("eventCount:"+eventCount);
    }
}
