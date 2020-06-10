const sumLargestNums = (exampleArr) => {
    var largest = 0;
    let secondLargest = 0;
    for (let n = 0; n < exampleArr.length; n++) {
        if (n === 0) {
            largest = exampleArr[n];
        }
        if (exampleArr[n] > largest) {
            largest = exampleArr[n];
        }

    }
    for (let a = 0; a < exampleArr.length; a++) {
        if (a === 0) {
            secondLargest = exampleArr[a];
        }
        if (exampleArr[a] > secondLargest && exampleArr[a] != largest) {
            secondLargest = exampleArr[a];
        }
        console.log(largest);
        console.log(secondLargest);
        return (largest + secondLargest);
    }
}


const test = [19, 20, 3, 5, 9, 8, 10];
console.log(sumLargestNums(test));