function calculateSum() {
    let INDICE = 12 , SUM = 0 , K = 1

    while (K < INDICE) {
        K = K + 1;
        SUM = SUM + K;
    }

    return SUM;
}

console.log(calculateSum());
