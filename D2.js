/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function biggerNum(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isEqualToFive(num) {
  num === 5 ? console.log("equal") : console.log("not equal");
}

isEqualToFive(2);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isDivisibleToFive(num) {
  num % 5 === 0 ? console.log("divisibile per 5") : console.log("non divisibile per 5");
}
isDivisibleToFive(25);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function findEight(num1, num2) {
  if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) return true;
  else return false;
}
console.log(findEight(9, 10));

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 50;
function freeShipping(cart) {
  if (cart < 50) cart += 10;
  return cart;
}
console.log(freeShipping(totalShoppingCart));

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function blackFriday(cart) {
  return cart - cart * 0.2;
}
totalShoppingCart = blackFriday(totalShoppingCart);
console.log("scontato a: ", totalShoppingCart);
console.log(freeShipping(totalShoppingCart));

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array = [];
const num1 = 50;
const num2 = 40;
const num3 = -20;
if (num1 < num2 && num1 < num3) {
  array.push(num1);
  if (num2 < num3) {
    array.push(num2);
    array.push(num3);
  } else {
    array.push(num3);
    array.push(num2);
  }
} else if (num2 < num1 && num2 < num3) {
  array.push(num2);
  if (num1 < num3) {
    array.push(num1);
    array.push(num3);
  } else {
    array.push(num3);
    array.push(num1);
  }
} else {
  array.push(num3);
  if (num1 < num2) {
    array.push(num1);
    array.push(num2);
  } else {
    array.push(num2);
    array.push(num1);
  }
}

console.log(array);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numb = "2";
typeof numb === "number" ? console.log("è un numero") : console.log("non è un numero");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isEven(numb) {
  return numb % 2 === 0;
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
    */

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10;
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const pippo = [];
for (let i = 0; i < 10; i++) {
  pippo.push(i + 1);
}
console.log(pippo);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
pippo.splice(pippo.length - 1, 1, 100);
console.log(pippo);
