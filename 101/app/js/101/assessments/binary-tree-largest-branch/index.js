// hired.com practice assessment for programming
// node index.js
// npm test

// Given a binary tree represented as an array, write a function that calculates the sum of the left branch and the sum of the right branch, and returns the largest branch.
// If the left branch is larger, return 'Left'
// If the right branch is larger, return 'Right'
// If they are equal, return 0
// If the tree has 0 nodes, return 0
// -1 is a non-existent node

let arr = [3, 6, 2, 9, -1, 10]; // Left

const solution = (arr) => {
    // Type your solution here

    console.log(arr);

    function filterArr(arr) {
        // Remove root node
        arr.shift();
        // Remove all non-existent nodes (-1)
        return arr.filter(node => node !== -1);
    }

    function leftBranchSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i += 2) {
            sum += arr[i];
        }
        return sum;
    }

    function rightBranchSum(arr) {
        let sum = 0;
        for (let i = 1; i < arr.length; i += 2) {
            sum += arr[i];
        }
        return sum;
    }

    // filterArr(arr);
    arr = filterArr(arr);

    // console.log("Filtered Array: ", arr);

    let leftSum = leftBranchSum(arr);
    let rightSum = rightBranchSum(arr);

    console.log("Left Branch Sum", leftSum);
    console.log("Right Branch Sum", rightSum);

    function calcLrgstBranch(leftSum, rightSum) {
        let res = null;
        if (leftSum > rightSum) {
            res = 'Left';
        } else if (leftSum < rightSum) {
            res = 'Right';
        } else if (leftSum === rightSum) {
            res = 0;
        } return res;
    }

    let result = calcLrgstBranch(leftSum, rightSum);
    console.log("Result:", result);
    
    return result;
};

solution(arr);

module.exports = solution;
