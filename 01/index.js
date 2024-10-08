function fibonacci(number) {
    let a = 0 ,  b = 1 , temp

    if (number === 0 || number === 1) {
        return `${number} isto e um número fibonacci`;
    }

    while(b <= number) {
        if(b === number) {
            return `${number} pertence a sequência de Fibonacci`
        }

        temp = a + b;
        a = b;
        b = temp;
    }
    return `${number} não pertence a sequência de Fibonacci`
}

let num = 3;

console.log(fibonacci(num));
