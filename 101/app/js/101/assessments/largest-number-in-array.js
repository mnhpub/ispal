const solution = (numbers) => {
    // Type your solution here
    //     console.log('hello world ', numbers, numLength);
    //     const (largestNum) => {
    //     const greeting = 'hello world';

    function largestNum(numbers) {
        //         console.log('largest number calculator // begin program', numbers);
        //         return greeting;
        if (numbers.length === 0) return 0;
        let largestIndexValue = numbers[0];
        let numLength = numbers.length;
        for (let i = 0; i < numLength; i++) {
            if (numbers[i] > largestIndexValue) {
                largestIndexValue = numbers[i];
            }
        }
        return largestIndexValue;
    }
    // call our program
    //     console.log(largestNum(numbers));
    calculateLargestNum = largestNum(numbers);
    return calculateLargestNum;
};
