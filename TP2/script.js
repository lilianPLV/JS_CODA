//////////////////////// Code fourni (ne pas moidifier) ////////////////////////
// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}
///////////////////////////////////////////////////////////////////////////////
//============
//||PARTIE 1||
//============
console.log('taille:', notes.length);
let note_minimal = 20;
for (let i = 0; i < notes.length; i++){
    //parcour la liste et a chaque fois qu'il trouve un chiffre plus petit le met dans la variable note_minimal
    if(note_minimal > notes[i]){
        note_minimal = notes[i];
    }
}
console.log('min:', note_minimal);

let note_max = 0;
for (let i = 0; i < notes.length; i++){
    //parcour la liste et a chaque fois qu'il trouve un chiffre plus grand le met dans la variable note_max
    if(note_max < notes[i]){
        note_max = notes[i];
    }
}
console.log('max:', note_max);
console.log(notes);
console.log('============================================================');

//============
//||PARTIE 2||
//============
for(let i = 0; i < notes.length; i++){
    //parcour de la liste et quand il trouve un nombre pareil que la note minimal, donne l'indice ou se trouve celui-ci 
    if (note_minimal == notes[i]){
        console.log("note minimal:", note_minimal,". Il se trouve a l'indice:", i);
    }
}
console.log('============================================================');

//============
//||PARTIE 3||
//============
let swap;
for(let i = 0; i < notes.length; i++){
    if (note_minimal == notes[i]){
        //la premiere valeur de notes se retrouve dans swap
        swap=notes[0];
        //la note minimal se retrouve en premiere position du tableau
        notes[0]=notes[i];
        //la valeur qui etais la premiere du tableau se retrouve a la place de la plus petite valeur
        notes[i]=swap;
        console.log(notes);
        //arret de la boucle for
        break;
    }
}
console.log('============================================================');

//============
//||PARTIE 4||
//============
let alt;
let tableau_debut=[];
//copy de la liste
for (let i = 0; i < notes.length; i++){
    tableau_debut[i]=notes[i];
}

let deplacement = 0;
let verification = 0;
for (let i = 0; i < notes.length; i++){
    for (let j = i+1; j < notes.length; j ++){
        if(notes[i]>notes[j]){
            //Echange de deux valeur
            //on met dans alt la valeur qui se trouve en i
            alt=notes[i];
            //on met dans i la valeur de j
            notes[i]=notes[j];
            //on met dans j la valeur qui se situe dans alt
            notes[j]=alt;
            deplacement+=1;
            console.log("un echange a ete fait, le tableau ressemble a", notes);
        }
        verification+=1;
    }
}

//============
//||PARTIE 5||
//============
console.log("avant", tableau_debut);
console.log("apres", notes);
let tableau_trie_croi = [];
//boucle pour copier le tableau de notes
for (let i = 0; i < notes.length; i++){
    tableau_trie_croi[i]=notes[i];
}
console.log('============================================================');

//================
//||PARTIE BONUS||
//================
//ajout a la partie 4 pour le premier point et le deuxieme
console.log("Il y a eu un total de:", deplacement, "deplacements");
console.log("Il y a eu un total de:", verification, "verification");
console.log('============================================================');

alt;
deplacement = 0;
verification = 0;
for (let i = 0; i < notes.length; i++){
    for (let j = i+1; j < notes.length; j ++){
        if(notes[j]>notes[i]){
            alt=notes[i];
            notes[i]=notes[j];
            notes[j]=alt;
            deplacement+=1;
            console.log("un echange a ete fait, le tableau ressemble a", notes);
        }
        verification+=1;
    }
}
console.log("avant", tableau_trie_croi);
console.log("apres", notes);
console.log('============================================================');
console.log("Il y a eu un total de:", deplacement, "deplacements");
console.log("Il y a eu un total de:", verification, "verification");
console.log('============================================================');