
// function calculateAge() {
//     const year = document.getElementById("Année de naissance").value;
//     const currentYear = new Date().getFullYear();
    
//     if (year) {
//         document.getElementById("age").textContent = currentYear - year;
//     } else {
//         document.getElementById("age").textContent = "";
//     }


// Récupère le bouton ayant l'id "boutonValider" et le stocke dans une variable
let elementBoutonValider = document.getElementById("boutonValider");

// Récupère l'input ayant l'id "Nom" et le stocke dans une variable
let elementInputNom = document.querySelector("#Nom");

// Ancien écouteur d’événement sur le bouton (désactivé/commenté)
// elementBoutonValider.addEventListener("click", function () { ... });

// Affiche l’objet document entier dans la console
console.log(document.html);

// Affiche le titre de la page (balise <title>) dans la console
console.log(document.title);

// Affiche le contenu de la balise <head> dans la console
console.log(document.head);

// Récupère l’élément ayant l’id "recensement"
let elementDivRecensement = document.querySelector("#recensement");

// Récupère l’élément ayant l’id "paragraphe"
let elementPreRecensement = document.querySelector("#paragraphe");

// Affiche l’élément paragraphe dans la console
console.log(elementPreRecensement);

// Commentaire indiquant l’objectif suivant (afficher une variable)
// pour afficher une variable

// Récupère l’élément ayant l’id "listCommunes"
let elementListCommunes = document.querySelector("#listCommunes");

// Affiche la liste des communes dans la console
console.log(elementListCommunes);

// Récupère tous les éléments ayant la classe "commune"
let elementClassCommune = document.querySelectorAll(".commune");

// Boucle qui parcourt tous les éléments de la liste "commune"
for (let i = 0; i < elementClassCommune.length; i++) {

    // Affiche chaque élément ayant la classe "commune" dans la console
    console.log(elementClassCommune[i]);
    console.log(elementClassCommune[i].textContent);
}


