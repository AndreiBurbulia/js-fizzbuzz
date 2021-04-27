

// stampare i numeri da 1 a 100
var numero = Number(Math.ceil(Math.random() * 100));
document.getElementById("numero").innerHTML = numero;


//verificare se i numeri sono divisibili per 3 e per 5 

//Svolto con switch
switch (true) {

    //se e divisibile sia per 3 che per 5 stampo FizzBuzz
    case numero % 3 == 0 && numero % 5 == 0:
        document.getElementById("divisibile_5_3").innerHTML = "FizzBuzz";
        break;

    //se e divisibile per 3 allora stampo Fizz
    case numero % 3 == 0:
        document.getElementById("divisibile_3").innerHTML = "Fizz";
        break;

    //se e divisibile per 5 stampo Buzz
    case numero % 5 == 0:
        document.getElementById("divisibile_5").innerHTML = "Buzz";
        break;
}


//svolto con IF

/*
//se e divisibile sia per 3 che per 5 stampo FizzBuzz
if (numero % 3 == 0 && numero % 5 == 0) {
    document.getElementById("divisibile_5_3").innerHTML = "FizzBuzz";
}

//se e divisibile per 3 allora stampo Fizz
else if (numero % 3 == 0) {
    document.getElementById("divisibile_3").innerHTML = "Fizz";
}

//se e divisibile per 5 stampo Buzz
else if (numero % 5 == 0) {
    document.getElementById("divisibile_5").innerHTML = "Buzz";
}

*/