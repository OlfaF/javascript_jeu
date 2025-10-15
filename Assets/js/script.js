 console.log("Du javascript !");

const Choix = ["feu", "eau", "terre"];


function choixOrdinateur() {
  const index = Math.floor(Math.random() * Choix.length);
  return Choix[index];
}


function comparerChoix(joueur, ordinateur) {
  if (joueur === ordinateur) {
    return "Égalité !";
  }

  if (
    (joueur === "feu" && ordinateur === "terre") ||
    (joueur === "eau" && ordinateur === "feu") ||
    (joueur === "terre" && ordinateur === "eau")
  ) {
    return "Tu as gagné !";
  } else {
    return "Tu as perdu !";
  }
}


function jouer(pouvoirJoueur) {
  const pouvoirOrdinateur = choixOrdinateur();
  const resultat = comparerChoix(pouvoirJoueur, pouvoirOrdinateur);

  
  const zoneResultat = document.getElementById("resultat");
  zoneResultat.textContent = resultat;


  console.log("Joueur :", pouvoirJoueur);
  console.log("Ordinateur :", pouvoirOrdinateur);
  console.log("Résultat :", resultat);
}


document.querySelectorAll("button").forEach(bouton => {
  bouton.addEventListener("click", () => {
    const choix = bouton.textContent.toLowerCase();
    jouer(choix);
  });
});



