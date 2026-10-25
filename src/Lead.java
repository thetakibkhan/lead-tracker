public class Lead {
    private final String name;
    private final String email;
    private final int score;

    public Lead(String name, String email, int score) {
        this.name = name;
        this.email = email;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public int getScore() {
        return score;
    }

    // Work out priority from the score instead of storing a second value.
    public String getPriority() {
        if (score >= 80) {
            return "HOT";
        }
        if (score >= 50) {
            return "WARM";
        }
        return "COLD";
    }
}
