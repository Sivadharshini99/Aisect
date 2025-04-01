package coding_challenges;

public class Count_number_of_odd_numbers_from_1to10 {
    public static void main(String[] args) {
        int countOddNumber=0;
        for (int i = 1; i <=10; i++) {
            //to print only even numbers
            if (i%2==0) {
            }
            //to print only odd number
            else{
                countOddNumber=countOddNumber+1;
              //  System.out.println("odd number:" + i);
            //  System.out.println("odd number count:"+ countOddNumber);
            }
        }
        System.out.println("odd number count:"+ countOddNumber);
    }
}
