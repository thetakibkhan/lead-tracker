# CRM Realm Technical Assessment

## Run the Java program

From the project folder, compile and run:

```sh
javac src/Lead.java src/Main.java
java -cp src Main
```

Choose 1 to add a lead, 2 to view leads, or 3 to exit. Scores must be whole numbers from 0 to 100.

## Run the JavaScript functions and checks

```sh
node solutions.js
```

The checks are kept at the bottom of `solutions.js` so no extra test file or package setup is needed.

## Main ideas

- `Lead.java` keeps the lead's name, email, and score. Its priority is calculated from the score: 80 or more is HOT, 50 to 79 is WARM, and below 50 is COLD.
- `solutions.js` has the three JavaScript functions. The first two use simple loops to find the answer. The status function counts each status it sees and does not change the input list.
- `queries.sql` contains the PostgreSQL queries. It assumes scores are integers from 0 to 100.

Spaces and punctuation count as characters in the first JavaScript problem. The Java app only checks that the email is not empty, as required by the assessment.

With more time, I would add automated checks for the Java menu and input validation.
