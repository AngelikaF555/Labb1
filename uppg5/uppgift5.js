/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.


PSUDO-KOD
Datorn slumpar mellan sten sax påse
användaren anger sten/sax/påse

om lika
    det blev lika
om spelare vann
    du vann
om datorn vann
    du förlora

More PSUDOKOD for when player wins

Player  |   Computer
--------------------
stone    |   scissors
scissors |   paper
paper    |   stone

*/

let computerInput = Math.floor(Math.random() * 3)
console.log(`Computers choice: ${computerInput}`)

switch(computerInput) {
    case 0:
        computerInput = "rock"
        break
    case 1:
        computerInput = "paper"
        break
    case 2:
        computerInput = "scissors"
        break
}

let userInput = (prompt(`Choose rock, paper or scissors. Computers choice is ${computerInput}`)).toLowerCase()
console.log(`Users choice: ${userInput}`)

while (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
    userInput = (prompt("Choose rock, papper or scissors")).toLowerCase()
}

if (userInput == computerInput) {
    alert('Tie!')
} else if (userInput == "rock" && computerInput == "scissors"
    || userInput == "paper" && computerInput == "rock"
    || userInput == "scissors" && computerInput == "paper") {
    alert("You won!")
} else {
    alert("You lost!")
}
