public class Mathprgm {
    public static void main(String[] args) {
        //find max
        int maxNum=Math.max(4,8);
        System.out.println("max num is :" +maxNum);
        
        //find min
        int minNum=Math.min(2,8);
        System.out.println("min num is :" +minNum);

        //find square root
        double sqrtNum=Math.sqrt(64);
        System.out.println("square root num is :" +sqrtNum);

        //absolute value
        double absNum=Math.abs(-4.7);
        System.out.println("absolute value num is :" +absNum);

        //generating random number (0.0 to 1.0)
        double randomNum=Math.random();
        System.out.println("random num b/w 0.0 to 1.0 is :" +randomNum);
        //generating random number (0 to 100)
        double randomNum2=(int)(Math.random() * 100);
        System.out.println("random num b/w 0 to 100 is :" +randomNum2);
         //generating random number (50 to 100)
        double randomNum3=(int)(Math.random() * (100-50+1
        
        ));
        System.out.println("random num b/w 50 to 100 is :" +randomNum3);




    }
}
