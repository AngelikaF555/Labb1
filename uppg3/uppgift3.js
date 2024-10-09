/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.

PSUDO-KOD
ask user for shape (circle/rectangle/triangle)
Input saved in variables: if circle: ask for radius
Input saved in variables: if triangle and rectangle: ask for width and height
Calculate area based on input
Output: area

*/

// const shape = prompt("Choose a shape (circle/rectangle/triangle)")

let height = 0
let width = 0
let radius = 0

switch (prompt("Choose a shape (circle/rectangle/triangle)")) {
    case "rectangle":
        height = prompt("Height of rectangle")
        width = prompt("Width of rectangle")
        alert(`Area of rectangle is ${height * width}`)
        break
    case "triangle":
        height = prompt("Height of rectangle")
        width = prompt("Width of rectangle")
        alert(`Area of triangle is ${height * width / 2}`)
        break
    case "circle":
        radius = prompt("Radius of circle")
        alert(`Area of circle is ${Math.round(radius**2 * Math.PI)} rounded to nearest integer`)
        break
    default:
        alert("invalid shape: try circle, rectangle or triangle")

}