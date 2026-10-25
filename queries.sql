-- PostgreSQL. Scores are integers from 0 to 100.

-- Show all HOT leads.
SELECT id, name, email, score
FROM leads
WHERE score >= 80;

-- Count leads in each priority group, including groups with zero leads.
SELECT 'HOT' AS priority, COUNT(*) AS lead_count
FROM leads
WHERE score >= 80
UNION ALL
SELECT 'WARM', COUNT(*)
FROM leads
WHERE score BETWEEN 50 AND 79
UNION ALL
SELECT 'COLD', COUNT(*)
FROM leads
WHERE score BETWEEN 0 AND 49;
