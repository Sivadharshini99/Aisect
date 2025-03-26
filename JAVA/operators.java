public class operators {
   
    public static void main(String[] args) {
        
       //1. Arithmetic Operators in Backend - When a user adds multiple items to the cart, this logic calculates the total cost.
        double itemPrice = 499.99;
        int quantity = 3;
        double taxRate = 0.18;

        double totalBeforeTax = itemPrice * quantity; // Multiplication operator (*)
        double taxAmount = totalBeforeTax * taxRate;  // Tax calculation
        double totalPrice = totalBeforeTax + taxAmount; // Addition operator (+)

        System.out.println("Total Price (with tax): " + totalPrice);

        //2.Relational (Comparison) Operators in Backend - Checking Discount Eligibility
        double orderTotal = 1500.00;
        double discount = 0;

        if (orderTotal >= 1000) { // Greater than or equal to (>=)
            discount = orderTotal * 0.10; // 10% discount
        }
        
        System.out.println("Discount Applied: " + discount);
        double afterdiscountprice=orderTotal-discount;
        System.out.println(afterdiscountprice);

        //3.Logical Operators in Backend - Checking Login Authentication
        String storedEmail = "user@example.com";
        String storedPassword = "securePassword";

        String enteredEmail = "user@example.com";
        String enteredPassword = "securePassword";

        if (enteredEmail.equals(storedEmail) && enteredPassword.equals(storedPassword)) { // Logical AND (&&)
            System.out.println("Login Successful");
        } else {
            System.out.println("Invalid Credentials");
        }
        //4.Bitwise Operators in Backend - Used in Role-Based Access Control (RBAC) in Admin Dashboards.
        int READ = 1;   // 0001
        int WRITE = 2;  // 0010
        int DELETE = 4; // 0100

        int userPermissions = READ | WRITE; // Assign read and write permissions (Bitwise OR)

        // Check if user has write permission
        if ((userPermissions & WRITE) != 0) { // Bitwise AND
            System.out.println("User has WRITE permission");
        }
        //5.Assignment Operators in Backend -Used in Inventory Management System in Spring Boot.

            int stock = 50;
            int itemsSold = 5;
    
            stock -= itemsSold; // stock = stock - itemsSold
    
            System.out.println("Remaining stock: " + stock);

        //6. Unary Operators in Backend-Product Review & Rating System
        int totalRatings = 100;
        totalRatings++; // Increment total ratings by 1

        System.out.println("Updated total ratings: " + totalRatings);

        //7. Ternary Operator(conditional) in Backend - Used in Checkout Process to decide shipping charges.
        double orderTotal2 = 600;
        String shipping = (orderTotal2 >= 500) ? "Free Shipping" : "₹50 Shipping Fee";

        System.out.println("Shipping Charge: " + shipping);
        

    }
}
