console.log("### Application Horloges initialisée ###");

/* =========================
   DATE
   ========================= */
const maintenant = new Date();

const moisFrancais = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

document.querySelector("#annee").textContent = maintenant.getFullYear();
document.querySelector("#mois").textContent = moisFrancais[maintenant.getMonth()];

document.querySelector("#dateJour").textContent =
    maintenant.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

/* =========================
   HORLOGES
   ========================= */
const horloges = [
    { id: "#horlogeParis", zone: "Europe/Paris" },
    { id: "#horlogeTokyo", zone: "Asia/Tokyo" },
    { id: "#horlogeMayotte", zone: "Indian/Mayotte" }
];

function formaterHeure(zone) {
    return new Intl.DateTimeFormat("fr-FR", {
        timeZone: zone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(new Date());
}

function mettreAJourHeures() {
    document.querySelector("#heureLocal").textContent =
        new Date().toLocaleTimeString("fr-FR");

    horloges.forEach(({ id, zone }) => {
        const element = document.querySelector(id);
        if (element) {
            element.textContent = formaterHeure(zone);
        }
    });
}

mettreAJourHeures();
setInterval(mettreAJourHeures, 1000);
