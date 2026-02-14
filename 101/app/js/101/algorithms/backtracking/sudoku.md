```javascript
function solveSudoku(board) {
    const n = 9;
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    function isValidMove(row, col, num) {
        // Check row and column
        const rowConflict = board[row].includes(num);
        const colConflict = board.map(row => row[col]).includes(num);

        // Check subgrid
        const subgridStartRow = Math.floor(row / 3) * 3;
        const subgridStartCol = Math.floor(col / 3) * 3;
        const subgridConflict = board
            .slice(subgridStartRow, subgridStartRow + 3)
            .reduce((acc, row) => acc.concat(row.slice(subgridStartCol, subgridStartCol + 3)), [])
            .includes(num);

        return !rowConflict && !colConflict && !subgridConflict;
    }

    function solve() {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (board[row][col] === '.') {
                    for (let num of digits) {
                        if (isValidMove(row, col, num)) {
                            board[row][col] = num;
                            if (solve()) return true;
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    solve();
}

// Example usage:
const sudokuBoard = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

solveSudoku(sudokuBoard);
console.log(sudokuBoard);
```

### Notes
