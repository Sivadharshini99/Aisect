public class BreakContinueExample {
    public static void main(String[] args) {
        System.out.println("Break Ex(for loop)");
        for (int i=0;i<10;i++)
        {
            if(i==4)
            {
                System.out.println("loop stiopped at"+i);
                break;
            }
          System.out.println(i);
        }
        System.out.println("loop exited");
        System.out.println("Continue Ex(while loop)");
        int i=0;
        while(i<10)
        {
            i++;
            if(i==6)
            {
                System.out.println("skipping "+i);
                continue;
            }
            System.err.println(i);
        }
        System.out.println("loop completed");
    }
}
