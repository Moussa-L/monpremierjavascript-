// Affichage d'un message dans la console du navigateur
console.log("Bonjour");

// Déclaration d'une (LET)variable
let salutation = "bonjour tout le monde";

// Affichage de la variable dans la console
console.log(salutation);


// Déclaration de deux variables pour le nom et le prénom qui sont des STRINGS
let nom = "Moussa";
let prenom = "Lidya";


// Affichage du nom complet dans la console
console.log("Je m'appelle " + nom + " " + prenom);

console.log("Je suis ",nom ,prenom)

// Déclaration d'une variable pour l'âge
let age = 21;
console.log("J'ai " + age + " ans");


// Déclaration de variables numériques
let prix = 12;
// différents types de nombres
// nombre décimal qui contient un point
const nombreDecimal =3.4123;
// nombre négatif
const nombreNegatif = -509;
// nombre fractionnaire on divise 1 par 3
const nombreFractionnaire = 1/3;
// Affichage des variables numériques dans la console 
console.log(prix, nombreDecimal, nombreNegatif, nombreFractionnaire);
// Autre façon d'afficher les variables numériques dans la console
console.log(prix);
console.log(nombreDecimal);
console.log( nombreNegatif);
console.log(nombreFractionnaire);
// Opérations arithmétiques


let pluie = true;
let soleil = false;
// Affichage des variables booléennes dans la console
console.log(pluie);
console.log(soleil);

// liste d'élèves
let eleves=["Amina","Said","Abdou","Fatima","Ali","Baco"];
console.log(eleves);

// Accès à un élément spécifique dans la liste
console.log(eleves[0]); // j'affiche le premier element de mon tableau eleves "Amina"

// Déclaration d'un objet représentant un joueur professionnel de football
let joueurprofessionnel= {
    nom: "Zinédine Zidane",
    //vu qu'il ya deux nationalités on fait une chaîne de caractères STRING
    // "nationalité" est propriété de l'objet joueurprofessionnel
    nationalite: ["Française" , "Algérienne"],
    dateDeNaissance: "23/06/1972" ,
    // taille en mètres (NOMBERDECIMAL)
    taille: 1.85,
    poste: "Milieu offensif",
    piedFort: "Droit"
};

// Affichage de l'objet joueurprofessionnel dans la console
// IL AFFICHE TOUT L'OBJET
console.log(joueurprofessionnel);
// IL AFFICHE CHAQUE PROPRIÉTÉ DE L'OBJET
// J'affiche le nom de l'objet joueurprofessionnel
console.log(joueurprofessionnel.nom);
// J'affiche la nationalité de l'objet joueurprofessionnel
console.log(joueurprofessionnel.nationalite[0]); // J'affiche la première nationalité "Française"
console.log(joueurprofessionnel.nationalite[1]); // J'affiche la deuxième nationalité "Algérienne"
// J'affiche le poste de l'objet joueurprofessionnel
console.log(joueurprofessionnel.poste);
// J'affiche la taille de l'objet joueurprofessionnel
console.log(joueurprofessionnel.taille);
// J'affiche la date de naissance de l'objet joueurprofessionnel
console.log(joueurprofessionnel.dateDeNaissance);
// J'affiche le pied fort de l'objet joueurprofessionnel
console.log(joueurprofessionnel.piedfort);

// Déclaration d'un objet représentant un homme politique
let hommepolitique= {
    nom: "Mansour Kamardine",
    nationalité: "Française",
    dateDeNaissance: "23/03/1959" ,
    profession:"Avocat et homme politique français.",
    partiPolitique:"RPR UMP LR",
    maire:"Sada 1983 – 1991(8 ans)"
   
};

// Affichage de l'objet hommepolitique dans la console
console.log(hommepolitique);
// IL AFFICHE CHAQUE PROPRIÉTÉ DE L'OBJET
// J'affiche le nom de l'objet hommepolitique
console.log(hommepolitique.nom);
// J'affiche la nationalité de l'objet hommepolitique
console.log(hommepolitique.nationalité);
// J'affiche la profession de l'objet hommepolitique
console.log(hommepolitique.profession); 
// J'affiche le parti politique de l'objet hommepolitique
console.log(hommepolitique.partiPolitique);
// J'affiche le maire de l'objet hommepolitique
console.log(hommepolitique.maire);
// J'affiche la date de naissance de l'objet hommepolitique
console.log(hommepolitique.dateDeNaissance);
