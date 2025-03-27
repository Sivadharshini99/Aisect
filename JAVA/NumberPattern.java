public class NumberPattern {
    public static void main(String[] args) {
        for(int i=1; i<=4; i++) {
            for(int j=1; j<=4; j++) {
                System.out.print(j + " ");  // Changed println to print to keep numbers on the same line
            }
            System.out.println();  // Moves to the next line after printing all numbers for the row
        }


    }
}
