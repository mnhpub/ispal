```javascript
function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isSafe(row, col) {
        // Check if there is a queen in the same column
        const colConflicts = board.slice(0, row).map(row => row[col]).includes('Q');

        // Check upper left diagonal
        const upperLeftDiagConflicts = board.slice(0, row).map((row, i) => row[col - (row.length - i - 1)]).includes('Q');

        // Check upper right diagonal
        const upperRightDiagConflicts = board.slice(0, row).map((row, i) => row[col + (row.length - i - 1)]).includes('Q');

        return !colConflicts && !upperLeftDiagConflicts && !upperRightDiagConflicts;
    }

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return result;
}

// Example usage:
const n = 4;
const solutions = solveNQueens(n);
console.log(solutions);
```

### Notes
