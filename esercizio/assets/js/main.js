

// stampare i numeri da 1 a 100
var numeri = [];


//verifico la divisibilita dei numeri
for (i = 1; i <= 100; i++) {
    var a = i;
    switch (true) {

        //se e divisibile sia per 3 che per 5 scrivo "FizzBuzz"
        case a % 3 == 0 && a % 5 == 0:
            numeri.push("FizzBuzz");
            break;

        //se e divisibile per 3 scrivo "Fizz"
        case a % 3 == 0:
            numeri.push("Fizz");
            break;

        //se e divisibile per 5 scrivo "Buzz"
        case a % 5 == 0:
            numeri.push("Buzz");
            break;

        //se non e divisibile ne per 3 ne per 5 lo scrivo semplicemente
        default:
            numeri.push(a);
            break;
    }

}

//vado a stampare a video tutti i numeri con le ruispettive modifiche
for (i = 0; i < 100; i++) {
    document.writeln("<li>" + numeri[i] + "</li>");

}

