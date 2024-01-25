console.log('%c Implicitní přetypování ', 'background:black;color:yellow;');

// Type coersion - implicitní přetypování 
// Automatická konverze typů, aniž bychom explicitně řekli
// Nejběžněji nastává ve chvíli,
// kdy operátorem spojíme hodnoty dvou různých typů

// 3 + '2'
//const x = 3 + '2';
//výsledek bude 32;
// 3 + Number('2');
//const x = 3 + Number('2');

// 3 * '2'
//const x =  3 * '2';

// 3 + null
//const x = 3 + null; výsledek bude 3
//const x = Number(null);

// 3 + true
// 3 + false
//const x = 3 + true;// výsledek je 4
//const x = 3 + false; //výsledek je 3 


// 3 + undefined → NaN

const x = 3 + undefined;

console.log(x, typeof x);