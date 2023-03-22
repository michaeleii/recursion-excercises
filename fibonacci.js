const fibs = (n) => {
	const result = [];
	for (let i = 0; i < n; i++) {
		i < 2 ? result.push(i) : result.push(result[i - 1] + result[i - 2]);
	}
	return result;
};

console.log(fibs(8));

const calcFib = (n) => {
	if (n < 2) {
		return n;
	}
	return calcFib(n - 1) + calcFib(n - 2);
};

const result = [];
const fibsRec = (n) => {
	if (n === 0) return result.reverse();
	result.push(calcFib(n));
	return fibsRec(n - 1);
};

console.log(fibsRec(8));
