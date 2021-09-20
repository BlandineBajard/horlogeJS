// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

// Déplacer les aiguilles 

//Extraire l'heure actuelle à l'aide de l'objet Date()

const horloge = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables

let seconde = horloge.getSeconds(); // les secondes
let minute = horloge.getMinutes()*60; // les minutes en secondes
let heure = horloge.getHours()*3600; // les heures en secondes

console.log (heure, minute, seconde);

let angleSeconde = seconde*6; // les secondes par 6 degrés
let angleMinutes = (minute+seconde)*0.1; // les minutes par 0.1 degrés
let angleHeures = (heure+minute+seconde)*0.0083; // les heures par 0.0083 degrés


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
function demarrerLaMontre() {
AIGUILLESEC.style.transform =`rotate(${angleSeconde}deg)`; 
AIGUILLEMIN.style.transform = `rotate(${angleMinutes}deg)`;   
AIGUILLEHR.style.transform = `rotate(${angleHeures}deg)`;

angleSeconde +=6; // ça tourne tous les 6 degrés
angleMinutes += 0.1; // ça tourne tous les 0.1 degrés
angleHeures += 0.0083; // ça tourne tous les 0.0083 degrés

}
// Exercuter la fonction chaque seconde
var interval = setInterval(demarrerLaMontre, 1000);