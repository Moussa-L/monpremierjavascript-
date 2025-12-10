                //            ###"LES FONCTIONS EN JAVASCRIPT"###            //

//Affichage dans la console
console.log("section fonction");




             //                #### FONCTION D'ADDITION ####                //



    //Déclaration de la fonction qui se nomme "additionner"
    function additionner (chiffre1, chiffre2) {

    //qui va additionner deux chiffres
    let resultat = chiffre1 + chiffre2;

    //et retourner le résultat de l'addition
    return resultat;
};

    //la varable "sommesAddition" va récupérer la fonction "additionner" avec les valeurs 15 et 8
    let sommesAddition = additionner (15 , 8);

    //affichage dans la console de la variable "sommesAddition"
    console.log("sommesAddition: ", sommesAddition);




                //                #### FONCTION DE SOUSTRACTION ####                //



    //*Déclaration de la fonction qui se nomme "soustraire"
    function soustraire (chiffre1, chiffre2) {

    //qui va soustraire deux chiffres
    let resultat = chiffre1 - chiffre2;

    //et retourner le résultat de la soustraction
    return resultat;
};
    
    //la varable "resteSoustraire" va récupérer la fonction "soustraire" avec les valeurs 15 et 8
    let resteSoustraire = soustraire (15 , 8);

    //affichage dans la console de la variable "resteSoustraire"
    console.log("somme1: ", resteSoustraire);


                //                #### FONCTION DE MULTIPLICATION ####                //




    //Déclaration de la fonction qui se nomme "multiplications"
    function multiplications (chiffre1, chiffre2) {

    //qui va multiplier deux chiffres
    let resultat = chiffre1 * chiffre2;

    //et retourner le résultat de la multiplication
    return resultat;
};
    

    //la varable "totalMultiplications" va récupérer la fonction "multiplications" avec les valeurs 15 et 8
    let totalMultiplications = multiplications (15 , 8);

    //affichage dans la console de la variable "totalMultiplications"
    console.log("totalMultiplications: ", totalMultiplications);

    //Autre façon d'écrire une fonction de multiplication
    function multiplier(a, b) {
        let resultat= a*b;
        return a * b;
    }
     