function nextInSequenceA() {
    let sequence = [1,3,5,7]
    let next = sequence[sequence.length - 1] + 2
    return next;
}

console.log(nextInSequenceA());

function nextInSequenceB() {
    let sequence = [2,4,8, 16,32, 64]
    let next = sequence[sequence.length - 1] * 2
    return next;
}
console.log(nextInSequenceB());

function nextInSequenceC() {
    let sequence = [0,1,4,9,16,25,36]
    let next = Math.pow(sequence.length, 2)
    return next;
}
console.log(nextInSequenceC());

function nextInSequenceD() {
    let sequence = [4,16,36,64]
    let next = Math.pow((sequence.length + 1) * 2, 2)
    return next;
}

console.log(nextInSequenceD());


function nextInSequenceE() {
    let sequence = [1,1,2,3,5,8]
    let next = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    return next;
}

console.log(nextInSequenceE());


function nextInSequenceF() {
    let sequence = [2,10,12,16,17,18,19]
    let next = sequence[sequence.length - 1] + 1
    return next;
}

console.log(nextInSequenceF());
