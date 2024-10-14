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

PSUDO-KOD
Ta fram ett slumpvalt värde mellan 0 och 10
input: fråga user om gissning, spara i variabel
jämför det slumpvalda värdet och gissningen:
om gissningen och det slumpvalda värdet matchar - output: "You guessed right!" -> SLUT
om gissning var högre än slumpvalda värdet -> output; "The right number is lower"
om gissning var lägre än slumpvalda värdet -> output; "The right number is higher"
input: fråga user om gissning, spara i variabeln igen
om gissningen och det slumpvalda värdet matchar -> output: "You guessed right!"
om gissning inte matchar -> output: "You guessed wrong, better luck next time"

*/ 

//Tar ett slumpvalt värde mellan 0 och 10
var nummer = Math.random(); //random number between 0-1, inkluding 0, exkluding 1
console.log(nummer); //ex number = 0.6777
nummer = nummer * 10; //ex number 6.7777
console.log(nummer);
nummer = Math.round(nummer); //round to integer
console.log(nummer);


/* FORTSÄTT MED EGEN KOD HÄR */
let guess = Number(prompt(`Guess a integer between 0 and 10 (Right answer is ${nummer})`))

while (typeof(guess) != typeof(1) || Math.round(guess) != guess) {
    guess = Number(prompt(`Must be a number. Guess a integer between 0 and 10 (Right answer is ${nummer})`))
}

for (let i = 0; i < 1; i++) {
    if (guess < nummer)  {
        guess = prompt(`${guess} was to low. Guess a new integer between 0 and 10. (Right answer is ${nummer})`)
    } else if (guess > nummer) {
        guess = prompt(`${guess} was to high. Guess a new integer between 0 and 10. (Right answer is ${nummer})`)
    }

} if (guess != nummer){
    alert("You lost. Better luck next time.")
} else {
    alert(`You won! ${nummer} was right!`)
}