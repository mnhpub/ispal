## Rosetta Stone (SQL)

```sql
-- Pronunciation
-- SQL is pronounced "sequel" (industry default) or "S-Q-L" (acceptable)
--
-- OPERATIONAL MAXIMS:
-- 🧼 Wash your hands after joins → joins change cardinality; re-filter, re-aggregate, re-alias
-- ⚔️ Wield the index → avoid functions/casts on indexed columns; verify with EXPLAIN

-- Select
SELECT col1, col2 FROM table;

-- Filter
SELECT * FROM t WHERE col = 1 AND col2 IN (1,2);

-- Order / Limit
SELECT * FROM t ORDER BY col DESC LIMIT 10 OFFSET 20;

-- Distinct
SELECT DISTINCT col FROM t;

-- Aggregates
SELECT col, COUNT(*) FROM t
GROUP BY col
HAVING COUNT(*) > 1;

-- Joins (wash your hands after joins)
-- Joins change cardinality; reassert control explicitly
SELECT a.id, b.status
FROM a
JOIN b ON b.a_id = a.id;

-- Subquery / Exists
SELECT * FROM t WHERE id IN (SELECT id FROM u);
SELECT * FROM t WHERE EXISTS (SELECT 1 FROM u WHERE u.id = t.id);

-- Insert
INSERT INTO t (a,b) VALUES (1,2);

-- Update / Delete
UPDATE t SET col = 3 WHERE id = 1;
DELETE FROM t WHERE id = 1;

-- Upsert (Postgres-style)
INSERT INTO t (id,val)
VALUES (1,'x')
ON CONFLICT (id) DO UPDATE
SET val = EXCLUDED.val;

-- Create table / Index
CREATE TABLE t (
  id INT PRIMARY KEY,
  col TEXT NOT NULL
);
CREATE INDEX idx_t_col ON t(col);

-- Use the index, Luke
-- Write predicates the optimizer can use
WHERE created_at >= '2025-02-01'
  AND created_at <  '2025-02-02';

-- Window function
SELECT col,
       ROW_NUMBER() OVER (PARTITION BY grp ORDER BY col)
FROM t;

-- CTE
WITH cte AS (SELECT * FROM t)
SELECT * FROM cte;

-- Case / Nulls
SELECT CASE WHEN col > 0 THEN 'pos' ELSE 'neg' END FROM t;
SELECT COALESCE(col, 0) FROM t;

-- Transactions
BEGIN;
COMMIT;
ROLLBACK;
<<<<<<< HEAD:mda/rosetta.sql
```
=======
```
>>>>>>> refs/remotes/origin/main:mdaops/rosetta.sql
