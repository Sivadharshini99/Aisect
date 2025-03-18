//8.instanceof Operator in Backend - Used in Payment Gateway Integration.--Checking Payment Method Type
class Payment {}// Parent class representing a generic payment
class CreditCardPayment extends Payment {} // A subclass of Payment representing credit card payment

public class PaymentService {//main class
    public static void main(String[] args) {
        Payment payment = new CreditCardPayment();// Creating a CreditCardPayment object and assigning it to a Payment reference

        if (payment instanceof CreditCardPayment) { //Checking if the payment object is an instance of CreditCardPayment
            System.out.println("Payment made using Credit Card");
        }
    }
}
//NOTE:
/*The instanceof operator checks whether the object referenced by payment is an instance of CreditCardPayment or any of its subclasses.
In this case, the object payment actually references a CreditCardPayment object, so the condition payment instanceof CreditCardPayment will evaluate to true.*/