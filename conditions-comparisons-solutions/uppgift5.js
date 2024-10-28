/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/


/*
PSEUDOKOD

Datorn slumpar mellan sten/sax/påse
Användaren anger sten/sax/påse

om lika 
  "Det blev lika"
Om spelaren vann
  "Du vann"
om Datorn vann
  "Du förlorade, du är sämst"

*/



// Random number between 1-3
// let  randomNumber = Math.random() * 3 // Random number between 0- 2.99999999
// randomNumber = Math.floor(randomNumber) // Random number that is either 0, 1 or 2
// randomNumber = randomNumber + 1         // Random number that is either 1, 2 or 3


// Is explained above, in 3 steps
const randomNumber = Math.floor(Math.random() * 3) + 1;


// Note! switch-case is more appropiate than if-statement, in this case
let computerChoice;
if (randomNumber === 1) {
  computerChoice = "sten";
} else if (randomNumber === 2) {
  computerChoice = "sax";
} else if (randomNumber === 3){
  computerChoice = "påse";
}

const userChoice = prompt("Ange sten/sax/påse. CHEAT: datorn valde " + computerChoice);



/*
More PSEUDOKOD for when the player wins

Player      |      Computer
---------------------------
sten        |      sax
sax         |      påse
påse        |      sten
*/

if (userChoice === computerChoice) {
  console.log("Det blev lika");
} else if ((userChoice === "sten" && computerChoice === "sax") 
  || (userChoice === "sax" && computerChoice === "påse") 
  || (userChoice === "påse" && computerChoice === "sten")
) {
  console.log("Du vann, du är bäst!!!")
} else {
  console.log("Du förlorade, du är SÄMST!!!")
}
