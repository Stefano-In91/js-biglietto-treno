// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
const runKm = Number(prompt( "Quanti km devi percorrere?" ));
const passengerAge = Number(prompt( "La tua età" ));

console.log( `${passengerAge} anni ${runKm} km` )
// Prezzo del biglietto definito in base ai km (0.21 € al km).
const priceXkm = 0.21;
let runPrice = runKm * priceXkm;

console.log(`${runPrice} prezzo corsa iniziale`);

if ( passengerAge < 18 ) {
   // Applicato uno sconto del 20% per i minorenni.
   runPrice = runPrice * 0.8;
   console.log( `${runPrice} prezzo corsa dopo lo sconto` );

} else if ( passengerAge >= 65 ) {
   // Applicato uno sconto del 40% per gli over 65.
   runPrice = runPrice * 0.6;
   console.log( `${runPrice} prezzo corsa dopo lo sconto` );
}
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
runPrice = parseFloat(runPrice).toFixed(2);
console.log( `${runPrice} prezzo corsa finale` );

alert( `La tua corsa costerà ${runPrice}€` );

// Trenitalia è in ritardo
const runningLate = Math.floor(Math.random() * 300);

alert( `Qualsiasi treno tu stia cercando di prendere è in ritardo di ${runningLate} minuti`);
alert( `Saluti da Trenitalia` );