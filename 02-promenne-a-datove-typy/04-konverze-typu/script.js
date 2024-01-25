console.log('%c Konverze typů ', 'background:black;color:yellow;');

// Převod jednoho datového typu na jiný

// Text na číslo
// - parseInt()
const x = '100';
const result1 = parseInt(x);
console.log(result1, typeof result1);

const result2 = parseInt('100');
console.log(result2, typeof result2);

// - parseFloat()
const result3 = parseFloat('100.23');
console.log(result3, typeof result3);


// - Number()
const result4 = Number ('100')
console.log(result4, typeof result4);


// - unární operátor +
const result5 = + '100.23ads';


// Číslo na text
// - String()
const result6 = String(100);
console.log(result6, typeof result6)

// - number.toString()

const y = 100;
const result7 = x.toString();
console.log(result7, typeof result7);


// -cisl o.toFixed()
const a = 3.14159;
const result8 = x.ofFixed(2);// převod čísla na textový řetězec
console.log(result8, typeof result8);


// Cokoliv na Boolean
// - číslo na Boolean: 0 → false, všechno ostatní true, 
// - text na Boolean: '' → false, všechno ostatní true
// - null → false
// - undefined → false

const result9 = Boolean(100);
console.log(result9, typeof result9);

const result10 = Boolean('jahoda');
console.log(result10, typeof result10);

const result11 = Boolean('');
console.log(result11, typeof result11);

const result12 = Boolean(null);
console.log(result12, typeof result12);

const result13 = Boolean(undefined);
console.log(result13, typeof result13);
