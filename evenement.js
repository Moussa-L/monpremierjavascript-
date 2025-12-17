  
//je recupere l'element dont la variable 
const elementBoutonValiderDate = document.querySelector("#validerDate");

const elementSpanDateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");


//elementBoutonValiderDate.addEventListener ("click",function() {

 //console.log (elementBoutonValiderDate);  
 
//je declare un objet date en utilisant la classe date
 
const maDate = new Date();

console.log("je suis dans evenement");
console.log("ma date",maDate);
 elementBoutonValiderDate.addEventListener("click ", function(){
      //je décris l'action à realiser lorsque je clique sur le bouton valider
      
    elementBoutonValiderDate.innerHTML = maDate;

    elementSpanDateDuJourFormat2.textConetent = maDate.toLocaleDateString(); 

 
 
});

 //mon evenement "KEYDOWN"
 
 let elementBoutonFonctionFleche = document.querySelector("#buttonFleche");
  
 elementBoutonFonctionFleche.addEventListener("keydown", (event)=> {

    console.log("====Je suis dans l'événement====");
    console.log("Clée event:", event.key)
 });

 let elementInputNomForm = document.querySelector("#nom");


 elementInputNomForm.addEventListener("change",(event)=>{
     console.log(event.target.value);
 });

let messageSalutation;

let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");

 elementInputNomForm.addEventListener("change",(event)=>{

    console.log(event.target.value);

    messageSalutation = 'Bonjour ${event.target.value}';

    elementSpanNomUtilisateur.textContent = messageSalutation;
 });
