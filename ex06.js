function doublons(tab) {
	let nombre1 = tab[0];
	let nombre2 = tab[1];
	let nombre3 = tab[2];

	return [(tab = nombre1 * 2), nombre2 * 2, nombre3 * 2];
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]
