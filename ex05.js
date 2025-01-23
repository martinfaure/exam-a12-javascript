function compterVoyelles(chaine) {
	let voy = ["a", "e", "i", "o", "u", "y"];
	let contvoyelles = 0;
	for (let lettre of chaine) {
		if (voy.includes(lettre)) {
			contvoyelles++;
		}
	}
	return contvoyelles;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
