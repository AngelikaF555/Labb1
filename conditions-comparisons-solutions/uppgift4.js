/*
Ni ska programmera ett spel som går ut på att användaren ska gissa ett slumpvalt nummer 
mellan 0 och 10 som programmet har slumpat fram i förväg. 
Om spelaren gissar fel så ska den få ett försök till (totalt 2 gissningar) 
tillsammans med en text som berättar om gissningen var för hög eller för låg. 
Om spelaren gissar rätt ska spelet meddela spelaren att den har vunnit. 

Gör leken i verkligheten tillsammans med en bordskamrat och tänk efter hur ni gör denna process, detta kommer att underlätta tänkandet.

När ni har fått en känsla för hur detta utspelar sig mellan två människor ska ni översätta det för datorn. 
Börja med att göra en flowchart som beskriver processen. 
Gå sedan vidare och skriv pseudokod. 
Nedan finner ni en startkod för hur man gör ett slumpvalt nummer.
*/ 

//Tar ett slumpvalt värde mellan 0 och 10
let number = Math.random(); // random number between 0-1, inkluding 0, exkluding 1
console.log(number);
// Ex number = 0.9678999999
number = number * 10;
// Ex number = 9.678999999
console.log(number);
number = Math.round(number);
// Ex number = 10
console.log(number);


/* FORTSÄTT MED EGEN KOD HÄR */



/*
PSEUDOKOD
Slumpa tal från 0-10
Be användare gissa ett tal från 0-10

Om det var rätt gissat
  "Grattis"
Annars
  Om det var för högt
    "För högt, gissa igen"
  Annars
    "För lågt, gissa igen"

  Är det rätt gissat (andra försöket)
    "Grattis"
  Annars
    "Sämst"


*/


// let number = Math.round(Math.random() * 10);

let guess1 = parseInt(prompt("Guess a number between 0 and 10: CHEAT: Computer number " + number));

if (guess1 === number) {
  alert("You won! The correct number was " + number);
} else {
  if (guess1 > number) {
    alert("Your guess is too high.");
  } else {
    alert("Your guess is too low.");
  }

  let guess2 = parseInt(prompt("Try again! Guess a number between 0 and 10:"));

  if (guess2 === number) {
    alert("You won! The correct number was " + number);
  } else {
    alert("You are worthless " + number);
  }
}