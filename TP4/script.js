//============
//||PARTIE 1||
//============
function genererEleves(){
    const prenoms = [
    "Lucas", "Emma", "Nathan", "Léa", "Hugo",
    "Chloé", "Louis", "Manon", "Enzo", "Camille",
    "Jules", "Sarah", "Gabriel", "Inès", "Arthur",
    "Zoé", "Mathis", "Clara", "Raphaël", "Lina",
    "Paul", "Eva", "Tom", "Nina", "Noah"
    ];
    let taille_minimum = 7;
    let taille_maximum = 10;
    let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;
    // Déclarer le tableau pour stocker les noms
    let eleves = [];
    // Définir le nombre de prenom disponible
    let liste_eleve = 24;

    // Itérer autant de fois qu'on a de prenoms aléatoires à générer
    for (let i = 0; i < taille; i++) {
        // Générer une nombre aléatoire qui correspond a un indice de la liste des prenoms
        let prenom = Math.floor(Math.random() * (liste_eleve + 1));
        // Ajouter le prenom générée au tableau
        eleves.push(prenoms[prenom]);
    }
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
        tableau_eleves.push(info_eleve);
    }
    console.log(eleves);
    return tableau_eleves;
}

//============
//||PARTIE 2||
//============
function afficherEleve(tableau_eleves){
    for (let i = 0; i < tableau_eleves.length; i++){
        //affiche les noms et les moyennes de chaque eleve
        console.log(tableau_eleves[i].prenom, "à", tableau_eleves[i].moyenne, "de moyenne");
    }
}

//============
//||PARTIE 3||
//============
function trouverMoyenneMin(tableau_eleves, indexDepart){
    let moyenne_min = 20;
    let indice_min;
    //trouver la moyenne_min avec un index de départ de indexDepart
    for (let i = indexDepart; i < tableau_eleves.length; i++){
        if (tableau_eleves[i].moyenne < moyenne_min){
            moyenne_min = tableau_eleves[i].moyenne;
        }
    }
    //trouver l'index de la moyenne_min
    for (let i = indexDepart; i < tableau_eleves.length; i++){
        if (tableau_eleves[i].moyenne == moyenne_min){
            indice_min = i;
        }
    }
    console.log("moyenne minimal:", moyenne_min, "est à l'indice", indice_min);

}

//============
//||PARTIE 4||
//============
function afficherDonnees(tableau_eleves){
    let moyenne_max = 0;
    let count = 0;
    let indice_max
    //trouver la moyenne_max
    for (let i = 0; i < tableau_eleves.length; i++){
        if (tableau_eleves[i].moyenne > moyenne_max){
            moyenne_max = tableau_eleves[i].moyenne;
        }
        count++;
    }
    //trouver l'index de la moyenne_max
    for (let i = 0; i < tableau_eleves.length; i++){
        if (tableau_eleves[i].moyenne == moyenne_max){
            indice_max = i;
        }
    }
    console.log("Il y a", count, "eleves dans la classe");
    console.log(tableau_eleves[indice_max].prenom, "est la personne avec la moyenne la plus haute avec:", moyenne_max);
}

//============
//||PARTIE 5||
//============
function swap(tableau_eleves, index1, index2){
    let alt = 0;
    alt = tableau_eleves[index1];
    tableau_eleves[index1] = tableau_eleves[index2];
    tableau_eleves[index2] = alt;
}

//============
//||PARTIE 6||
//============
function triParSelection(tableau_eleves){
    let comparaisons = 0;
    let echanges = 0;
    for (let i = 0; i < tableau_eleves.length - 1; i++) {
        let indiceMin = i;

        for (let j = i + 1; j < tableau_eleves.length; j++) {
            comparaisons++;
            if (tableau_eleves[j].moyenne < tableau_eleves[indiceMin].moyenne) {
                indiceMin = j;
            }
        }

        if (indiceMin !== i) {
            let temp = tableau_eleves[i];
            tableau_eleves[i] = tableau_eleves[indiceMin];
            tableau_eleves[indiceMin] = temp;
            echanges++;
        }
    }
    console.log(tableau_eleves);
}

//============
//||PARTIE 7||
//============
let eleves = genererEleves();
console.log("=======================================================");
afficherEleve(eleves);
console.log("=======================================================");
trouverMoyenneMin(eleves, 0);
console.log("=======================================================");
afficherDonnees(eleves);
console.log("=======================================================");
swap(eleves, 0, 1);
triParSelection(eleves);
