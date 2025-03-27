import java.util.Scanner;

public class Loop {
    public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);
          
        int choice;
        do {
            System.out.print("\nEnter your choice: ");
            choice = scanner.nextInt();
            switch (choice) {
                case 1:
                    System.out.println("Starting The Game...");
                    break;
                case 2:
                    System.out.println("Your Score = 100");
                    break;
                case 3:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice! Please enter a valid choice.");
            }
        } while (choice != 3);
        scanner.close();
    }
}
