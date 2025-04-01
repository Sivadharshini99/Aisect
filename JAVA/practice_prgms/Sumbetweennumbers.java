package practice_prgms;

public class Sumbetweennumbers {
    //recursive function to find the sum between two numbers
    static int sumBetweenNumbers(int start, int end) {
        if (start>end) {
            return 0;//base case:if start is greater then end,return 0
        }
        return start + sumBetweenNumbers(start+1, end);//recursive case:add start
    }
    public static void main(String[] args) {
        int start = 5;
        int end = 10;
        int result = sumBetweenNumbers(start, end);//function call to find sum
        System.out.println("Sum between "+start+" and "+end+" is: "+result);
    }
}
