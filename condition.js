
//               #### LES CONDITIONS EN JAVASCRIPT ####               //

//J'affiche si le nombre de fruits est égal à 18
nombrefruit=18;


//Mise en place de la condition "IF" la syntaxe est la suivante :
//if (condition) { //code à exécuter si la condition est vraie
//}
if(nombrefruit=18 ) { //nous avons une comparaison avec le signe "="
    alert("Le nombre de fruits est égal à 18");//affichage d'une alerte
};

//Exemple avec la note d'un élève
let noteEleve=10;
// si la note de l'élève est supérieure ou égale à 10 alors il est admis
if (noteEleve >= 10){
    //affichage d'une alerte indiquant que l'élève est admis + la note obtenue
    alert("Vous avez été admis" + noteEleve );
};


let agespectateur = 18;//Exemple avec l'âge pour regarder un film


//si l'âge est égal à 18 alors l'utilisateur peut regarder le film Rambo
if (agespectateur = 18){

    //affichage d'une alerte indiquant que l'utilisateur peut regarder le film Rambo
    alert("Vous pouvez regarder Rambo");
};


//si l'âge est inférieur à 18 alors l'utilisateur peut regarder le roi lion
if (agespectateur < 18){
    //affichage d'une alerte indiquant que l'utilisateur peut regarder le roi lion
    alert("Vous pouvez regarder le roi lion");
};

let pointPermis = 12;//Exemple avec les points de permis de conduire

//si le nombre de points est stric égal à 12 alors l'utilisateur a un bonus
if (pointPermis == 12) {
    alert("Vous avez un bonnus!");
}

//si le nombre de points est inférieur à 12 alors l'utilisateur a un malus
else{
    alert("Vous avez des malus!");
};