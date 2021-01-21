//CALCULAR A APOSENTADORIA DE UMA PESSOA

const nome = 'Helena';
const idade = 60;
const sexo = 'F';
const contribuiçao = 35;
const aposentadoria = false;
const soma = contribuiçao + idade;


if (aposentadoria != true) {
    if (sexo != 'M') {
        if (soma >= 85) {
            console.log (`${nome}, você pode se aposentar!`)
        } else {
            console.log (`${nome}, você ainda não pode se aposentar.`)
        }
    } else {
        if (soma >= 95) {
            console.log (`${nome}, você pode se aposentar!`)
        } else {
            console.log (`${nome}, você ainda não pode se aposentar.`)
        }
    }
} else {
    console.log (`${nome}, você já está aposentado(a)!`)
}


