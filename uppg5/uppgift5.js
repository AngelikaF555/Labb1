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
sten    |   sax
sax     |   påse
påse    |   sten

markus föreslår att ha en while loop som är true tills det blir false som när inputen är sten sax eller påse för att förhindra att inte få någåto annat
str.toLowerCase gör att user input alltid blir små bokstäver så blir det mer fail-safe
*/

