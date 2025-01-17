console.log('%c Proměnné a konstanty ', 'background:black;color:yellow;');

// Proměnné a konstanty
// - proměnná je "nádoba", kam můžeme uložit data
// - data jsou různých datových typů - číslo, text, apod.

// Proměnnou musíme deklarovat
// var - už se nepoužívá
// let - pro proměnnou, kterou budeme v programu měnit
// const - pro konstanty, které nebudeme měnit, brání chybám, které mohou v programu nastat

// Pojmenování proměnných
// - záleží na velikosti písmen
// - můžeme použít písmena, čísla, podtržítko, dolar
// - nesmí začínat číslem
// - nesmí obsahovat mezeru - víceslovné názvy pomocí ↓
// - velbloudí notace (camel case) - v JS preferujeme
// - hadí notace (snake case)
// - smysluplné názvy

let name = "Jana"; 
let age = 15;
name = "Luděk";
console.log(name);
console.log(age);

const surname = "Obendrauf";
console.log(surname);

const vterinVMinute = 60;
const minutvHodine = 60;
const hodinveDni = 24;

