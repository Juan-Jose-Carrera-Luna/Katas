const numberOfVowels = function (data) {
    console.log('example ' + data);
    let vowelCounter = 0;
    for (let vowelPosition = 0; vowelPosition < data.length; vowelPosition++) {
        console.log('');
        console.log('this is vowel position: ' + vowelPosition);
        if (data[vowelPosition] == 'a' || data[vowelPosition] == 'e' || data[vowelPosition] == 'i' || data[vowelPosition] == 'o' || data[vowelPosition] == 'u') {
            console.log('this is vowel counter: ' + vowelCounter);
            vowelCounter++;
            console.log('');
        }
    }
    return vowelCounter;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("awesome possum")); // 6
console.log(numberOfVowels("aeiou")); // 5