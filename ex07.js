function moyenne(tab) {
	let nombre1 = tab[0];
	let nombre2 = tab[1];
	let nombre3 = tab[2];

	return (tab = (nombre1 + nombre2 + nombre3) / 3);
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
