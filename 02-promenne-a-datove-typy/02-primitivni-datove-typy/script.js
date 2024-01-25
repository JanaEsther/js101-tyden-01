console.log('%c Primitivní datové typy ', 'background:black;color:yellow;');

// Data uložená do proměnné mohou být různých datových typů
// JS rozlišuje primitivní a referenční datové typy

// Primitivní datové typy:
// Number - číslo
// String - text
// Boolean - logická hodnota
// null - prázdná hodnota, nic
// undefined - nedefinovaná hodnota
// Symbol - unikátní identifikátor
// BigInt - opravdu, ale OPRAVDU velká čísla

// Number
// - desetinná čísla s tečkou

const number = 5;
const decNumber = 15.35;
console.log(number, decNumber);


// String((()))
// - do "uvozovek", 'apostrofů' nebo tzv. `backticků`

const name1 = "Jana";
const name2 = 'Anele';
const town = `Kacov`;

// Boolean
// - logická pravda (true) nebo nepravda (false)



// null
// - když chceme specificky uvést, že proměnná je prázdná

const emptyValue = null;
console.log(emptyValue);

let age = null;
age = 18;

// undefined
// - např. deklarovaná proměnná bez výchozí hodnoty
// - výstup z funkce, která nevrací hodnotu

let currency;

console.log(currency);

const output = console.log(currency);
console.log(output); 


console.log(typeof age);
console.log(typeof name);
console.log(typeof emptyValue);    