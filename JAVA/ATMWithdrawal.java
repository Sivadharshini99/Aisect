import java.util.Scanner;

public class ATMWithdrawal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int balance = 5000; // Initial account balance
        int attempts = 0;   // PIN attempt counter
        String correctPIN = "1234";

        System.out.println("💳 Welcome to the ATM\n");

        // PIN authentication with a maximum of 3 attempts
        while (attempts < 3) {
            System.out.print("🔑 Enter your PIN: ");
            String enteredPIN = scanner.nextLine();

            if (!enteredPIN.equals(correctPIN)) {
                attempts++;
                System.out.println("❌ Incorrect PIN! Attempts left: " + (3 - attempts));

                if (attempts == 3) {
                    System.out.println("🔒 Account locked due to multiple incorrect attempts!");
                    break; // Stop further transactions
                }
                continue; // Skip the rest and retry PIN entry
            }

            // If PIN is correct, allow transactions
            while (true) {
                System.out.println("\n💰 Current Balance: $" + balance);
                System.out.print("💵 Enter withdrawal amount (or 0 to exit): ");
                int withdrawalAmount = scanner.nextInt();

                if (withdrawalAmount == 0) {
                    System.out.println("🚪 Exiting... Thank you for using our ATM!");
                    break; // Exit the transaction loop
                }

                if (withdrawalAmount > balance) {
                    System.out.println("⚠️ Insufficient funds! Transaction skipped.");
                    continue; // Skip this transaction and allow another attempt
                }

                // Successful transaction
                balance -= withdrawalAmount;
                System.out.println("✅ Withdrawal successful! Remaining balance: $" + balance);
            }
            break; // Exit the PIN loop after successful login and transaction
        }
        scanner.close();
    }
}
