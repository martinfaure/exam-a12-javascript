function filtrerNegatifs(tab) {
	let evenNumbers = tab.filter(function (number) {
		return number > 0;
	});

	return evenNumbers;
}

console.log(filtrerNegatifs([-3, 4, -1, 6], 1)); // Résultat attendu : [4, 6]
