function checkLetterA(str){
    let counter = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'A') {
            counter++;
        }
    }

    if(counter > 0) {
        return `A letra 'A' aparece ${counter} vezes na string`
    } else {
        return `A letra 'A' nunca apareceu na string`
    }
}

let string = "Israel ama Hamburguer , programação e javascript";

console.log(checkLetterA(string));
