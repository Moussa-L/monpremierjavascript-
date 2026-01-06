        console.log("### Je suis dans l'événement date ###");

const maDate2 = new Date();

const anneeEnCours = new Date().getFullYear();

let elementSpanAnee = document.querySelector("#annee");
elementSpanAnee.textContent = anneeEnCours;

let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate2.getMonth();

function afficherHeureParis() {
  const maintenant = new Date();

  const heureParis = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(maintenant);

  document.querySelector("#horlogeParis").textContent = heureParis;
}

// mise à jour chaque seconde
setInterval(afficherHeureParis, 1000);

// affichage immédiat
afficherHeureParis();
