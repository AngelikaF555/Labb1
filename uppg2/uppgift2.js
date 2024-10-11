/* Skriv ett program där du får en förfrågan om ett lösenord. 
Lösenordet ska vara satt till en variabel i din kod och ENDAST om användaren skriver rätt lösenord 
ska texten "Välkommen" visas. Om användaren skriver fel lösenord ska texten "Inkräktare" visas. 
Användarens svar ska sparas som en variabel. 
Använd if och en else för att lösa problemet. 
Om det är rätt, gör det här, annars gör det här

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.

PSUDO-KOD
Ange password variabel
input: Fråga användare om password och spara i variabel
om match mellan passwordvariablerna - output: "Välkommen"
Om inte match - output: "Inkräktare"

*/

let password = "password"
let userPassword = prompt("Ange lösenord")

if (password === userPassword) {
    alert("Välkommen")
} else {
    alert("Inkräktare!")
}