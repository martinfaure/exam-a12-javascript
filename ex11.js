function premiereLettreMajuscule(chaine) {
	return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
