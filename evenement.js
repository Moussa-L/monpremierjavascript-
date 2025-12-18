  
//je recupere l'element dont la variable déclaré
let elementBoutonValiderDate = document.querySelector("#validerDate"); 

let elementSpanDateDuJour = document.querySelector("#dateDuJour");

let elementSpanDateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");


//elementBoutonValiderDate.addEventListener ("click",function() {

 console.log(elementSpanDateDuJourFormat2);  
 
//je declare un objet date en utilisant la classe date
 
const maDate = new Date();

console.log("je suis dans evenement");
console.log("ma date",maDate);

elementBoutonValiderDate.addEventListener("click", function() {
      //je décris l'action à realiser lorsque je clique sur le bouton valider
   console.log("je suis dans l'événement click");

   elementSpanDateDuJour.textContent = maDate;
    
   elementSpanDateDuJourFormat2.textContent = maDate.toLocaleDateString(); 

   console.log(elementSpanDateDuJourFormat2);
 

});



 //mon evenement "KEYDOWN" pour détecter lorsqu'une touche est appuyé 
 let elementBoutonFonctionFleche = document.querySelector("#buttonFleche");


  //utilisations d'un écoueteur d'évenement ce qui vas illustrer dans console
  // si sa fonction 
 elementBoutonFonctionFleche.addEventListener("keydown", (event) => {

   // Affichage dans la console
    console.log("====Je suis dans l'événement====");

   // Affichage dans la console
    console.log("Clée event:", event.key);
 });

 let elementInputNomForm = document.querySelector("#nom");


 elementInputNomForm.addEventListener("change",(event) => {
     console.log(event.target.value);
 });

let messageSalutation;

let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");

 elementInputNomForm.addEventListener("change",(event) => {

    console.log(event.target.value);

    messageSalutation = `Bonjour ${event.target.value}`;

    elementSpanNomUtilisateur.textContent = messageSalutation;
 });

let elementForm = document.querySelector('form');

elementForm.addEventListener("submit",(event) => {
   event.preventDefault();
      console.log("#### Je suis l'événement Submit du formulaire ");
      const nom = document.querySelector("#nom").value;
      const prenom = document.querySelector("#prenom").value;

      
      console.log("NOM saisi:" , nom);
      console.log("PRENOM saisi:" , prenom);
});