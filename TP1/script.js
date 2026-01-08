//PARTIE 1
const classe = "B1-A";
let nb_eleve = 4;
let ouvert = false;

console.log(classe);
console.log(3);
console.log(ouvert);
console.log("====================================");

//PARTIE 2
let eleve1 = {
    prenom: "Lilian",
    note_maths: 20,
    note_francais: 9.5,
};

console.log(eleve1.prenom);
console.log("====================================");

//PARTIE 3
let eleve2 = {
    prenom: "Théo",
    note_maths: 2,
    note_francais: 0.5,
};

let eleve3 = {
    prenom: "Pierre",
    note_maths: 15,
    note_francais: 14,
};

let eleves = [eleve1, eleve2, eleve3];
for (let i = 0; i < eleves.length; i++){
    console.log(eleves[i].prenom); //Retrouve le prenom de l'élève
}
console.log("====================================");

//PARTIE 4
let moyenne1 = 0;
let moyenne2 = 0;
let moyenne3 = 0;

for (let i = 0; i < eleves.length; i++){
    if (eleves[i] == eleve1){  //Si l'élève a l'indice i est l'élève 1 alors la condition est valider
        moyenne1 += eleves[i].note_maths + eleves[i].note_francais;
    }
    else if (eleves[i] == eleve2){
        moyenne2 += eleves[i].note_maths + eleves[i].note_francais;
    }
    else if (eleves[i] == eleve3){
        moyenne3 += eleves[i].note_maths + eleves[i].note_francais;
    }
}

moyenne1 = moyenne1/2;
moyenne2 = moyenne2/2; //mise a jour de la moyenne
moyenne3 = moyenne3/2;
console.log(eleve1.prenom, moyenne1);
console.log(eleve2.prenom, moyenne2);
console.log(eleve3.prenom, moyenne3);
console.log("====================================");

//PARTIE 5
if (moyenne1<10){
    console.log(eleve1.prenom, "Pas admis");
}else{
    console.log(eleve1.prenom, "Admis");
}
if (moyenne2<10){
    console.log(eleve2.prenom, "Pas admis");
}else{                                          //Vérifie si l'eleve est admis ou pas
    console.log(eleve2.prenom, "Admis");
}
if (moyenne3<10){
    console.log(eleve3.prenom, "Pas admis");
}else{
    console.log(eleve3.prenom, "Admis");
}
console.log("====================================");

//PARTIE 6
if (moyenne1 >= 16){
    console.log(eleve1.prenom, "Très bien");
}else if (moyenne1 >= 14 && moyenne1 < 16){
    console.log(eleve1.prenom, "Bien");
}else if (moyenne1 >= 12 && moyenne1 < 14){
    console.log(eleve1.prenom, "Assez bien");
}else if (moyenne1 >= 10 && moyenne1 < 12){
    console.log(eleve1.prenom, "Passable");
}else if (moyenne1 < 10){
    console.log(eleve1.prenom, "Insuffissant");
}
if (moyenne2 >= 16){
    console.log(eleve2.prenom, "Très bien");
}else if (moyenne2 >= 14 && moyenne2 < 16){
    console.log(eleve2.prenom, "Bien");
}else if (moyenne2 >= 12 && moyenne2 < 14){         //comparaison de la moyenne pour voir qu'elle mention est
    console.log(eleve2.prenom, "Assez bien");       //attribuer a qui
}else if (moyenne2 >= 10 && moyenne2 < 12){ 
    console.log(eleve2.prenom, "Passable");
}else if (moyenne2 < 10){
    console.log(eleve2.prenom, "Insuffissant");
}
if (moyenne3 >= 16){
    console.log(eleve3.prenom, "Très bien");
}else if (moyenne3 >= 14 && moyenne3 < 16){
    console.log(eleve3.prenom, "Bien");
}else if (moyenne3 >= 12 && moyenne3 < 14){
    console.log(eleve3.prenom, "Assez bien");
}else if (moyenne3 >= 10 && moyenne3 < 12){
    console.log(eleve3.prenom, "Passable");
}else if (moyenne3 < 10){
    console.log(eleve3.prenom, "Insuffissant");
}
console.log("====================================");

//PARTIE7
let ok = 0;
let count = 0;
let moyenne_eleve1 = 0;
let moyenne_eleve2 = 0;
let moyenne_eleve3 = 0;

while(ok==0){
    for (let i = 0; i < eleves.length; i++){
        if (eleves[i] == eleve1){
            moyenne_eleve1 += (eleves[i].note_maths + eleves[i].note_francais)/2;
            console.log(moyenne_eleve1);
            if(moyenne_eleve1 >= 10){
                count+=1;
            }
        }
        if (eleves[i] == eleve2){
            moyenne_eleve2 += (eleves[i].note_maths + eleves[i].note_francais)/2;
            console.log(moyenne_eleve2);
            if(moyenne_eleve2 >= 10){
                count+=1;
            }
        }
        if (eleves[i] == eleve3){
            moyenne_eleve3 += (eleves[i].note_maths + eleves[i].note_francais)/2; //calcule de la moyenne
            console.log(moyenne_eleve3);
            if(moyenne_eleve3 >= 10){
                count+=1;
            }
        }
    }
    ok=1;
}
console.log(count, 'élèves ont la moyenne');
console.log("====================================");

//PARTIE BONUS
let moyenne_classe = (moyenne1 + moyenne2 + moyenne3)/3;
console.log(moyenne_classe);

let eleve4 = {
    prenom: "Alexis",
    note_maths: 10,
    note_francais: 9,
};

console.log(nb_eleve);
let moyenne_eleve4;
eleves = [eleve1, eleve2, eleve3, eleve4]; //tableau des eleves de la classe

while(ok==0){
    for (let i = 0; i < eleves.length; i++){
        if (eleves[i] == eleve1){ //Si l'élève a l'indice i est l'élève 1 alors la condition est valider
            moyenne_eleve1 += (eleves[i].note_maths + eleves[i].note_francais)/2; //Calcule de la moyenne de l'eleve 1
            console.log(moyenne_eleve1);
            if(moyenne_eleve1 >= 10){
                count+=1;
            }
        }
        else if (eleves[i] == eleve2){
            moyenne_eleve2 += (eleves[i].note_maths + eleves[i].note_francais)/2; //Calcule de la moyenne de l'eleve 2
            console.log(moyenne_eleve2);
            if(moyenne_eleve2 >= 10){
                count+=1;
            }
        }
        else if (eleves[i] == eleve3){
            moyenne_eleve3 += (eleves[i].note_maths + eleves[i].note_francais)/2; //Calcule de la moyenne de l'eleve 3
            console.log(moyenne_eleve3);
            if(moyenne_eleve3 >= 10){
                count+=1;
            }
        }
        else if (eleves[i] == eleve4){
            moyenne_eleve4 += (eleves[i].note_maths + eleves[i].note_francais)/2; //Calcule de la moyenne de l'eleve 4
            console.log(moyenne_eleve4);
            if(moyenne_eleve4 >= 10){
                count+=1;
            }
        }
    }
    if (count == 4){
        console.log("félicitation");
    }
    ok=1;
}