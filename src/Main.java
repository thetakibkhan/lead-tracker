import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<Lead> leads = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("\n1. Add a lead");
            System.out.println("2. View all leads");
            System.out.println("3. Exit");
            System.out.print("Choose an option: ");

            String choice = scanner.nextLine();

            if (choice.equals("1")) {
                addLead(scanner, leads);
            } else if (choice.equals("2")) {
                showLeads(leads);
            } else if (choice.equals("3")) {
                running = false;
            } else {
                System.out.println("Please choose 1, 2, or 3.");
            }
        }

        scanner.close();
    }

    private static void addLead(Scanner scanner, ArrayList<Lead> leads) {
        System.out.print("Name: ");
        String name = scanner.nextLine().trim();

        System.out.print("Email: ");
        String email = scanner.nextLine().trim();

        System.out.print("Score (0-100): ");
        String scoreText = scanner.nextLine().trim();

        if (name.isEmpty() || email.isEmpty()) {
            System.out.println("Name and email cannot be empty.");
            return;
        }

        int score;
        try {
            score = Integer.parseInt(scoreText);
        } catch (NumberFormatException exception) {
            System.out.println("Score must be a whole number from 0 to 100.");
            return;
        }

        if (score < 0 || score > 100) {
            System.out.println("Score must be between 0 and 100.");
            return;
        }

        Lead lead = new Lead(name, email, score);
        leads.add(lead);
        System.out.println("Lead added.");
    }

    private static void showLeads(ArrayList<Lead> leads) {
        if (leads.isEmpty()) {
            System.out.println("No leads have been added yet.");
            return;
        }

        for (Lead lead : leads) {
            System.out.println("Name: " + lead.getName());
            System.out.println("Email: " + lead.getEmail());
            System.out.println("Score: " + lead.getScore());
            System.out.println("Priority: " + lead.getPriority());
            System.out.println();
        }
    }
}
