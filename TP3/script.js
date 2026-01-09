//////////////////////// Code fourni (ne pas moidifier) ////////////////////////
const prenoms = [
    "Lucas", "Emma", "Nathan", "Léa", "Hugo",
    "Chloé", "Louis", "Manon", "Enzo", "Camille",
    "Jules", "Sarah", "Gabriel", "Inès", "Arthur",
    "Zoé", "Mathis", "Clara", "Raphaël", "Lina",
    "Paul", "Eva", "Tom", "Nina", "Noah"
];

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let eleves = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let liste_eleve = 24;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let prenom = Math.floor(Math.random() * (liste_eleve + 1));
    // Ajouter la note générée au tableau
    eleves.push(prenoms[prenom]);
}
///////////////////////////////////////////////////////////////////////////////
//============
//||PARTIE 1||
//============
console.log(eleves);
let count = 0;
let moyenne_min = 20;
let moyenne_max = 0;
let tableau_eleves = [];
for (let i = 0; i < eleves.length; i++) {
    let maths=  Math.floor(Math.random()* 21) ; //génère 3 notes aléatoire en maths français et hsitoire
    let français=  Math.floor(Math.random()* 21) ;
    let histoire=  Math.floor(Math.random()* 21) ;
    let info_eleve = {
        prenom : prenoms[Math.floor(Math.random()*liste_eleve)] , //génère un nom aléatoire de la liste prenoms
        note_maths : maths ,
        note_français : français,
        note_histoire : histoire,
        moyenne : Number(((maths + français + histoire) / 3).toFixed(2)),
    };
    console.log(info_eleve.prenom, "à", info_eleve.moyenne, "de moyenne");
    count+=1;
    tableau_eleves.push(info_eleve);
    if (info_eleve.moyenne < moyenne_min){
        moyenne_min = info_eleve.moyenne;
    }
    if (info_eleve.moyenne > moyenne_max){
        moyenne_max = info_eleve.moyenne;
    }
}
console.log("=====================================================");

//============
//||PARTIE 2||
//============
console.log("Il y a", count, "eleves dans la classe");
console.log("Moyenne minimum =", moyenne_min);
console.log("Moyenne maximum =", moyenne_max);
console.log("=====================================================");

//============
//||PARTIE 3||
//============
for (let i = 0; i < tableau_eleves.length; i++) {
    if(tableau_eleves[i].moyenne == moyenne_min){
        console.log("l'eleve avec la pire moyenne est", tableau_eleves[i].prenom, "avec", tableau_eleves[i].moyenne, ". Et elle se trouve a l'indice", i);
    }
}
console.log("=====================================================");

//============
//||PARTIE 4||
//============
let swap;
for (let i = 0; i < tableau_eleves.length; i++) {
    if (tableau_eleves[i].moyenne === moyenne_min) {
        swap = tableau_eleves[0];
        tableau_eleves[0] = tableau_eleves[i];
        tableau_eleves[i] = swap;
        break;
    }
}

for (let i = 0; i < tableau_eleves.length; i++) {
    console.log(tableau_eleves[i].prenom, tableau_eleves[i].moyenne);
}
console.log('============================================================');
console.log("=====================================================");

//============
//||PARTIE 5||
//============
let deplacement = 0;
let verification = 0;
for (let i = 0; i < tableau_eleves.length; i++){
    for (let j = i+1; j < tableau_eleves.length; j ++){
        if(tableau_eleves[i].moyenne>tableau_eleves[j].moyenne){
            alt=tableau_eleves[i].moyenne;
            tableau_eleves[i].moyenne=tableau_eleves[j].moyenne;
            tableau_eleves[j].moyenne=alt;
            deplacement+=1;
            console.log("un echange a ete fait, le tableau ressemble a", tableau_eleves[i]);
        }
        verification+=1;
    }
}