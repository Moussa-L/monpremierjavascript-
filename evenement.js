// je programmes les événement qui sont déclanchés du cpoté html 
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
   

