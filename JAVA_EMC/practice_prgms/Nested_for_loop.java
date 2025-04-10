public class Nested_for_loop {
    public static void main(String[] args) {
        for (int i = 1; i<=3; i++) {
            for (int j = 1; j<=3; j++) {
                System.out.println("siva");
            }
        }
        System.out.println();
        // star(*) prgm 
        for (int i = 1; i<=3; i++) {
            for (int j = 1; j<=3; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();
        // another pattern
        for (int i = 1; i<=5; i++) {
            for (int j = 1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();

        //another pattern
        for (int i = 5; i>=1; i--) {
            for (int j = 1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }


    }
}
