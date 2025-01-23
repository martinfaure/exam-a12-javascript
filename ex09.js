function compterMots(chaine) {
	let firstword = 1;
	return chaine.match(/[ ]/g).length + firstword;
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4
