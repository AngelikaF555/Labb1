/* 
--INSTRUKTIONER--

Skapa ett program som frågar efter namn och ålder samt sparar ner dessa i separata variabler.
Börja med att göra en flowchart och sedan skriva pseudokod, detta för att arbeta in förberedelsemetoder inför programmeringsproblem.

Beroende på vilken åldern användaren skriver in ska olika popups komma upp. Dessa ska ni styra med if/else statements.

följande regler ska gälla:

* programmet ska svara med namnet innan den skriver ut reglerna

* om personen är under 15, visa texten "Du måste ha hjälm när du cyklar"

* om personen är under 18, visa texten "Du får inte rösta"

* om personen är under 23, visa texten "Det blir ingen finlandsfärga"

* om personen är över 23, visa texten "Du är gammal nog att göra vad du vill"

Programmet ska bete sig enligt följande när du är klar:

Hej, vad heter du? :Micke
Ok Micke, hur gammal är du? :17

Du får inte rösta, Micke!
Det blir ingen finlandsfärga, Micke!

--PSEUDOKOD--
Start av program
Fråga efter användarens namn med input och spara i variabel
Fråga efter användarens ålder med input och spara i variabel
Om ålder är mindre än 15 år -> output: "Du måste ha hjälm när du cyklar"
Om under 18 år -> output: "Du får inte rösta"
Om under 23 år -> output: "Det blir ingen finlandsfärga"
Om högre ålder än 23 -> output: "Du är gammal nog att göra vad du vill"
Slut av program

*/

const name = prompt('Hej, vad heter du? : ');
const age = prompt(`Ok ${name}, hur gammal är du?`)
let message = ""

if (isNana(age)) {
    alert('Vänligen ange rätt ålder.')
}

if (age < 15) {
    message += (`Du måste ha hjälm när du cyklar, ${name}!`)
} if (age < 18) {
    message += (`Du får inte rösta, ${name}!`)
} if (age < 23) {
    message += (`Det blir ingen finlandsfärga, ${name}!`)
} else {
    message += (`Du är gammal nog att göra vad du vill, ${name}!`)
}

alert(message)