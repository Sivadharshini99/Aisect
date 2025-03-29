package practice_prgms;

import java.util.Scanner;

public class Trainticketsystem {
    // Static variables to store ticket details
    static String passengername;
    static int trainnumber;
    static String trainname;
    static String destination;
    static String departurestation;
    static String arrivalstation;
    static String departuretime;
    static String arrivaltime;
    static String seatType;
    static int platformno;
    static int ticketprice;

    // Static method to issue the ticket and store the details
    static void issueTicket(int trainno, String passengername, String trainname, String destination, 
                             String departurestation, String arrivalstation, String departuretime, 
                             String arrivaltime, String seatType, int platformno, int ticketprice) {
        Trainticketsystem.trainnumber = trainno;
        Trainticketsystem.passengername = passengername;
        Trainticketsystem.trainname = trainname;
        Trainticketsystem.destination = destination;
        Trainticketsystem.departurestation = departurestation;
        Trainticketsystem.arrivalstation = arrivalstation;
        Trainticketsystem.departuretime = departuretime;
        Trainticketsystem.arrivaltime = arrivaltime;
        Trainticketsystem.seatType = seatType;
        Trainticketsystem.platformno = platformno;
        Trainticketsystem.ticketprice = ticketprice;
    }

    // Static method to display the reservation details
    static void displayTicket() {
        System.out.println("============= TRAIN RESERVATION TICKET =============");
        System.out.println("Passenger Name  : " + passengername);
        System.out.println("Train Number    : " + trainnumber);
        System.out.println("Train Name      : " + trainname);
        System.out.println("Destination     : " + destination);
        System.out.println("Departure Station: " + departurestation);
        System.out.println("Arrival Station : " + arrivalstation);
        System.out.println("Departure Time  : " + departuretime);
        System.out.println("Arrival Time    : " + arrivaltime);
        System.out.println("Seat Type       : " + seatType);
        System.out.println("Platform Number : " + platformno);
        System.out.println("Ticket Price    : $" + ticketprice);
        System.out.println("====================================================");
    }

    public static void main(String[] args) {
        // Create a scanner object to get user input
        Scanner scanner = new Scanner(System.in);

        // Get all details from user input
        System.out.print("Enter Passenger Name: ");
        String passengername = scanner.nextLine();

        System.out.print("Enter Train Number: ");
        int trainno = scanner.nextInt();
        scanner.nextLine();  // Consume the newline

        System.out.print("Enter Train Name: ");
        String trainname = scanner.nextLine();

        System.out.print("Enter Destination: ");
        String destination = scanner.nextLine();

        System.out.print("Enter Departure Station: ");
        String departurestation = scanner.nextLine();

        System.out.print("Enter Arrival Station: ");
        String arrivalstation = scanner.nextLine();

        System.out.print("Enter Departure Time: ");
        String departuretime = scanner.nextLine();

        System.out.print("Enter Arrival Time: ");
        String arrivaltime = scanner.nextLine();

        System.out.print("Enter Seat Type (Upper, Lower, Middle): ");
        String seatType = scanner.nextLine();

        System.out.print("Enter Platform Number: ");
        int platformno = scanner.nextInt();

        System.out.print("Enter Ticket Price: ");
        int ticketprice = scanner.nextInt();

        // Issue the ticket using the method
        issueTicket(trainno, passengername, trainname, destination, departurestation, arrivalstation, 
                    departuretime, arrivaltime, seatType, platformno, ticketprice);

        // Display the ticket
        displayTicket();

        // Close the scanner to avoid resource leak
        scanner.close();
    }
}
