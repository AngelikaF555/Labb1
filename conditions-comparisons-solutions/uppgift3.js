/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.
*/


/*
PSEUDOKOD


Ange form

Är formen en "circle"
  Ange radie
  Räkna ut area
  visa svaret
Är formen en "triangle"
  Ange höjd
  Ange bredd
  Räkna ut area
  visa svaret
Är formen en "rectangle"
  Ange höjd
  Ange bredd
  Räkna ut area
  visa svaret

*/

while(true) {
  let shape = prompt("Enter a shape")

  if (shape == "circle") {
    let radius = prompt("Enter radius of the circle")
    // let result = Math.PI * radius**2              // Exponential with **
    let result = Math.pow(Math.PI * radius, 2)       // Exponential with Math.pow
    alert(`The area of the ${shape} is ${result}`)
    break;
  } else if (shape == "triangle") {
    let height = prompt("Enter height of the triangle")
    let base = prompt("Enter base of the triangle")
    let result = (height * base) / 2
    alert(`The area of the ${shape} is ${result}`)
    break;
  } else if (shape == "rectangle") {
    let height = prompt("Enter height of the rectangle")
    let base = prompt("Enter base of the rectangle")
    let result = height * base

    alert(`The area of the ${shape} is ${result}`)
    break;
  } else {
      alert("Please enter a valid shape, rectangle, circle or triangle")
  }
}