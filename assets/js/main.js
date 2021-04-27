// stampare i numeri da 1 a 100
var numero = Number(Math.ceil(Math.random() * 99));
console.log(numero);

//verificare se i numeri sono divisibili per 3 e per 5 

//se e divisibile per 3 allora stampo Fizz

//se e divisibile per 5 stampo Buzz

//se e divisibile sia per 3 che per 5 stampo FizzBuzz


var prova3 = numero % 3;
console.log(prova3);
var prova5 = numero % 5;
console.log(prova5);


if (prova3 == 0 && prova5 == 0) {
    document.getElementById("risultato").innerHTML = "FizzBuzz";
} else if (prova3 == 0) {
    document.getElementById("risultato").innerHTML = "Fizz";
} else if (prova5 == 0) {
    document.getElementById("risultato").innerHTML = "Buzz";
} else {
    document.getElementById("risultato").innerHTML = numero;

}