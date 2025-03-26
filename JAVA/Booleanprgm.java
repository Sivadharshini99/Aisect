import java.util.Random;
public class Booleanprgm {
     
    //method creation outside method but inside class
    //method checkInternetConnection
     public static boolean checkInternetConnection(){
        //obj.creation
        Random random = new Random();//nextBoolean(); is a method from the Random class in Java. It generates a random boolean value, meaning it will return either true or false randomly with approximately equal
        return random.nextBoolean(); //method calling
}

//main method
    public static void main(String[] args) {
        //BOOLEAN
        boolean isExcerciseHealthy = true;
        boolean isJunkFoodGood = false;
        System.out.println(isExcerciseHealthy);
        System.out.println(isJunkFoodGood);
    //EQUALS TYPES IN BOOLEAN
    int x = 10;
        int y = 9;
        System.out.println(x > y);
        System.out.println(x == y);
        System.out.println(x < y);
      //from checkinternet...method
        boolean isInternetAvailable = checkInternetConnection();
        System.out.println("Internet Available : "+isInternetAvailable);

        //
        boolean isLoggedIn = true;
        if (isLoggedIn) {
            System.out.println("Vanakam Da Mapla !");
    }
    else{
        System.out.println("Please Login To Continue !");
    }
}
      
   
}
