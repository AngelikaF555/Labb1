/* 

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

*/

let namn = prompt("Hej, vad heter du?");
let ålder = parseInt(prompt(`OK ${namn}, Hur gammal är du?`));
let message = ""

if (isNaN(ålder)) {
  message = "Vänligen ange rätt ålder."
} else {
  // alert(`Hej ${namn}`);

  if (ålder < 15) {
    message = `Du måste ha hjälm när du cyklar, ${namn}\n`;
  } 
  
  if (ålder < 18) {
    message += `Du får inte rösta, ${namn}\n`;
  }
  
  if (ålder < 23) {
    message += `Det blir ingen finlandsfärga, ${namn}`;
  } else {
    message = `Du är gammal nog att göra vad du vill, ${namn}`;
  }

  alert(message)
}



// Demonstrating how string literals works
// let name = "Erik";
// console.log(`Du måste ha hjälm när du cyklar, ${name}`)