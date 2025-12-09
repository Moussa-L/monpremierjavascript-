
// l'ecriture dans la console est en string
console.log( "Ici je code les operateurs en Javascript" );

//Addition
// Pour le prix unitaire
let prixUnitaire = 13; // nombre entier
let valeurAjoutee = 7; // nombre entier
let valeurRetiree = 5; // nombre entier

// Pour le prix total
let prixAdditionne1 = 3+7; // nombre entier

//J'affiche le resultat de l'addition dans la console
console.log("prixAdditionne1 :" , prixAdditionne1 );
// Autre façon de faire l'addition
let prixAdditionne2 = prixUnitaire + valeurAjoutee; // nombre entier
//J'affiche le resultat de l'addition dans la console
console.log("prixAdditionne2 :" , prixAdditionne2 );

//addition des chaines de caractères (STRING)
let eleve1 = "Fatima"; 
let eleve2 = "Amina";
 console.log(eleve1 + eleve2); // je concatène les deux chaines de caractères:désigne l’action de mettre bout à bout plusieurs éléments pour n’en faire qu’un seul.
 // Résultat: "Fatima Amina "

 console.log(eleve1 + " " + eleve2); // j'ajoute un espace entre les deux chaines de caractères
 // Résultat: "Fatima Amina "
 
 let eleveCombo = eleve1 +" "+ eleve2;// je crée une nouvelle variable qui contient la concaténation des deux chaines de caractères avec un espace entre les deux
    console.log("elveCombo:",eleveCombo);
    // Résultat: "Fatima Amina "




   //                        #### SOUSTRACTION ####                        //


   let prixReduit = prixUnitaire - valeurRetiree; // nombre entier
    console.log("prixReduit :", prixReduit );




    //                        #### MULTIPLICATION ####                        //







    //                        #### SIGNE SUPERIEUR / INFERIEURE  ####                        //





// exemple avec le signe supérieur
    let age1 = 12;
    let distanceParcourue = 5;
// est-ce que l'âge est supérieur à la distance à parcourue
//utilisation du signe ">" veut dire "supérieur à"
    console.log(age1 > distanceParcourue);

// exemple avec le signe inférieur
let age2 = 8;
let nombreDeBonbons = 20;
// est-ce que l'âge est inférieur au nombre de bonbons
//utilisation du signe "<" veut dire "inférieur à"
console.log(age2 < nombreDeBonbons);




    //         ### SIGNE SUPERIEUR OU EGAL / INFERIEURE OU EGAL ####            //




// exemple avec le signe supérieur ou égal
let age3 = 10;
let ageMinimum = 10;
// est-ce que l'âge est supérieur ou égal à l'âge minimum
//utilisation du signe ">=" veut dire "supérieur ou égal à"
console.log(age3 >= ageMinimum); 

// exemple avec le signe inférieur ou égal
let age4 = 7;
let ageMaximum = 12;
// est-ce que l'âge est inférieur ou égal à l'âge maximum
//utilisation du signe "<=" veut dire "inférieur ou égal à"
console.log(age4 <= ageMaximum);




     //                        #### SIGNE DE DIFFERENCE  ####                        //
    


//est-ce que le village est différent de la commune
let village1 = "Passamainty";
let commune1 = "Mamoudzou";
// utilisation du signe de différence "!=" veut dire "différent de la valeur"
console.log(villages != communes); // true car les deux chaines de caractères ne sont pas identiques


// est-ce que la commune est strictement différente du village
let village2 = "dembeni";
let commune2 = "Dembeni";
// utilisation du signe de différence stricte "!==" veut dire "strictement différent de la valeur et du type"
console.log(commune !== village); // true car les deux chaines de caractères ne sont pas identiques à cause de la casse "dembeni" et "Dembeni"



//                        #### SIGNE D'EGALITE  ####                        //





let village3 = "Bandrele";
let commune3 = "BandreLe";
// utilisation du signe de différence stricte "===" veut dire "strictement différent de"
console.log(commune3 === village3); // false car les deux chaines de caractères sont différentes par la casse "Bandrele" et "BandreLe"

    



// exemple avec le signe d'égalité      


