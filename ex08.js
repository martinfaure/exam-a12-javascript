function sommePairs(tab) {
	let nbrpair1 = 0;
	let nbrpair2 = 0;
	let somme = nbrpair1 + nbrpair2;
	let nombre1 = tab[0];
	let nombre2 = tab[1];
	let nombre3 = tab[2];
	let nombre4 = tab[3];

	if (tab[0] % 2 == 0) {
		return (nbrpair1 = nombre1);
	}
	if (tab[1] % 2 == 0) {
		return (nbrpair1 = nombre2);
	}
	if (tab[2] % 2 == 0) {
		return (nbrpair2 = nombre3);
	}
	if (tab[3] % 2 == 0) {
		return (nbrpair2 = nombre4);
	}

	return (somme = nbrpair1 + nbrpair2);
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6
