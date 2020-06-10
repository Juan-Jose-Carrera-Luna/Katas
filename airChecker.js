const checkAir = function (samples, threshold) {

    let dirtyCounter = 0;
    let sampleCounter = 0;
    let result = 0;

    for (i = 0; i < samples.length; i++) {
        if (samples[i] === 'dirty') {
            dirtyCounter++;
            sampleCounter++;
        }
        else if (samples[i] === 'clean') {
            sampleCounter++;
        }
    }
    result = (dirtyCounter / sampleCounter);
    if (result > threshold) {
        return 'Polluted';
    }
    else return 'Clean';
};

console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
)); // Polluted

console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
)); // Polluted

console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
)) // Clean