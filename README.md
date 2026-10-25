# CRM Realm Technical Assessment

This project contains a small Java lead tracker, three JavaScript problem solutions, and PostgreSQL queries. Leads are kept in memory while the Java program runs; no database connection or third-party library is needed.

## Requirements

- Java Development Kit (JDK)
- Node.js 16.9 or later
- PostgreSQL for running the SQL queries (optional)

## Run the Java program

From the project folder, compile and start the menu:

```sh
javac src/Lead.java src/Main.java
java -cp src Main
```

Choose `1` to add a lead, `2` to view leads, or `3` to exit.

## Run the JavaScript functions and checks

The functions and a few checks are in `solutions.js`. Run them with:

```sh
node solutions.js
```

Example results:

```text
firstNonRepeatingChar("aabbcdd") -> "c"
findTwoSum([2, 7, 11, 15], 9) -> [0, 1]
countLeadsByStatus([{ status: "NEW" }, { status: "NEW" }]) -> { NEW: 2 }
```

The checks also cover empty input, no matching character or pair, repeated values, punctuation, and that counting statuses leaves the input array unchanged.

## SQL

`queries.sql` contains the HOT lead query and counts for HOT, WARM, and COLD leads. The queries use PostgreSQL and assume `leads` has `id`, `name`, `email`, and integer `score` columns, with scores from 0 to 100.

## Decisions and test cases

- Priority is calculated from the score: `0-49` is COLD, `50-79` is WARM, and `80-100` is HOT. Check the boundaries `0`, `49`, `50`, `79`, `80`, and `100` in the Java menu.
- A blank name or email, a non-number score such as `abc`, or a score outside `0-100` should be rejected. The app checks that an email is not blank; it does not validate the email format.
- Spaces and punctuation count as characters in `firstNonRepeatingChar`. Letter case is ignored when counting, while the original character is returned.
- `countLeadsByStatus` counts every status it encounters. To include statuses with a count of zero, initialize a count of zero for each known status before counting the leads.

With more time, I would add automated Java tests for the menu and input validation.

## AI tools

ChatGPT assisted with drafting and revising the Java, JavaScript, SQL, and README files.
