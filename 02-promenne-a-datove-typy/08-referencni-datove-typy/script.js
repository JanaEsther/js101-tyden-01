console.log('%c Referenční datové typy ', 'background:black;color:yellow;');

// Referenční datové typy - objekty, pole, funkce
// Rozdíl mezí primitivními a referenčními datovými typy:
// - jak jsou uložené v paměti počítače
// - popíšeme si v další lekci

// Funkce
// - kus kódu, který spustíme
// - může přijímat vstupní parametry
// - na výstupu může vracet hodnotu
// - jde zapsat různě, popíšeme si v samostatné lekci

// tradiční zápis
function pozdrav() {
    console.log('Ahoj');
    console.log('Dnes je hezky');
}
 pozdrav();  
  
  // přiřazení do proměnné
 // const pozdrav = function() {
    console.log('Ahoj');
    console.log('Dnes je hezky');
 
   // alert('Ahoj');
  
  // moderní zápis - arrow function
  const pozdrav = () => {
    console.log('Ahoj');
  }

// Objekty
// - popisuje komplexnější data
// - ve složených závorkách
// - uvnitř vlastnosti a jejich hodnoty
// - může mít i tzv. metody - funkce, které patří objektu
// - metody objektů už známe a používáme - např. console.log() metody jsou funkce, které objekt může spouštět.

const name = Alena;
const age = 27;


const osoba = {
    jmeno: 'Alena',
    vek: 27,
    maRidicak: true,
    mesto:'Praha'
  };

  console.log(osoba.jmeno);
  console.log(osoba.vek);
  osoba.jmeno = 'Jana';


  const town = {
    name: Prague,
    population:Czech,

  };

// Pole
// - skupina hodnot
// - v hranatých závorkách
// - uvnitř mohou být jakékoliv hodnoty
// - má metody, pomocí kterých můžeme s hodnotami pracovat

const cisla  =[ 1 , 7 , 40, 59, 98, 1598, 47];
const names = ['Alena','Jana','Milena','Marie', Petra];
console.log(cisla);
console.log(jmena);

console.log(jmena.lenght);
console.log(jmena[0]);

jmena[2] = 'Ludmila';


